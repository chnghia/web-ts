class Rawuser
  include Mongoid::Document
  include Mongoid::Timestamps::Created

  paginates_per 5

  field :machine_code, type: Integer
  field :enroll_number, type: String
  field :name, type: String
  field :password, type: String
  field :privilege, type: Integer
  field :enabled, type: Boolean
  field :fingers, type: Array

  class << self
    def import(ipaddr)
      zk = Zkemkeeper.new
      if zk.connect_net(ipaddr)
        zk.regevent()
        zk.readalluserid()
        zk.readalltemplate()
        rawuser = {}
        while (zk.ssr_getalluserinfo(1, rawuser))
          if where(enroll_number: rawuser[:dwenrollnumber]).exists?
            #1..10.each do |index|
            #  rawf = {}
            #  zk.getusertmpexstr(1, rawuser[:dwenrollnumber], index, rawf)
            #  rawuser[:fingers] << rawf[:tmpdata]
            #end

            create(machine_code: 1,
                   enroll_number: rawuser[:dwenrollnumber],
                   name: rawuser[:name],
                   password: rawuser[:password],
                   privilege: rawuser[:privilege],
                   enabled: rawuser[:enabled])
            
            rawuser = {}
          end
        end
        zk.disconnect()
        true
      else
        false
      end
    end
  end
end
