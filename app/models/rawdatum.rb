class Rawdatum
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  paginates_per 5
  field :machine_code, type: Integer
  field :enroll_number, type: String
  field :verify_mode, type: Integer
  field :inout_mode, type: Integer
  field :work_code, type: Integer
  field :time, type: Time

  class << self
    def listed(month)
      where(:date.gt => month.to_date, :date.lt => month.to_date.next_month).flatten
    end

    def import(ipaddr)
      zk = Zkemkeeper.new
      if zk.connect_net(ipaddr)
        zk.regevent()
        zk.readgenerallogdata()
        rawdata = {}
        while (zk.ssr_getgenerallogdata(1, rawdata))
          time = Time.parse("#{rawdata[:dwYear]}/#{rawdata[:dwMonth]}/#{rawdata[:dwDay]} #{rawdata[:dwHour]}:#{rawdata[:dwMinute]}:#{rawdata[:dwSecond]}")
          
          if where(machine_code: 1, enroll_number: rawdata[:dwenrollnumber], time: time).exists?
            create(machine_code: 1,
                   enroll_number: rawdata[:dwenrollnumber],
                   verify_mode: rawdata[:dwVerifyMode],
                   inout_mode: rawdata[:dwInOutMode],
                   work_code: rawdata[:dwWrkcode],
                   time: time)
            rawdata = {}
          end
        end
        zk.disconnect()
        true
      else
        false
      end
    end

    def timed_between(enroll_number, from, to)
      where(:enroll_number => enroll_number, :time.gte => from, :time.lte => to).flatten
    end

    def timed(enroll_number, date)
      where(:enroll_number => enroll_number, :time.gte => date.to_s, :time.lt => (date+1).to_s).asc(:time).flatten
    end
  end
end
