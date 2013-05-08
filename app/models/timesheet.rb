class Timesheet
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  include UtilityHelper
  
  paginates_per 5
  
  field :date, type: Date
  field :notes, type: String
  field :type, type: String

  embeds_many :timeblocks

  belongs_to :employee

  validates :date, presence: true

  class << self
    def listed(month)
      where(:date.gte => month.to_date, :date.lt => month.to_date.next_month)
    end

    # Cut time in Rawdata by Timeshift and insert to Timesheet with Timeblock
    def create_by_raw(employee, date)
      
      return false if !employee.timeshift?

      ts = find_or_initialize_by(employee: employee, date: date)
      ts.timeblocks.clear

      # get rawdata of date
      raws = Rawdatum.timed(employee.enroll_number, date)
      # get dayoff of employee,date
      dayoff = Dayoff.by_date(date)

      # get employee timeshift
      shift = employee.timeshift.by_date(date)

      # dayoff is holiday if no timesheet
      if dayoff && raws.blank? then
        ts.timeblocks << Timeblock.new_block(dayoff.type, shift[:begin], shift[:end])
        ts.timeblocks << Timeblock.new_block("break", shift[:break_begin], shift[:break_end])
      end

      case employee.timeshift.type
      when :auto then
        # in/out is 2 time event together
        raws.each_cons(2) do |slice|
        end
      when :filo then
        # if enough in/out for filo
        if raws.count > 1
          # get OT before working
          
          rfirst      = raws.first.time
          rlast       = raws.last.time
          otb_dur     = UtilityHelper.duration(rfirst, shift[:begin])
          #w_dur       = UtilityHelper.duration(rfirst, rlast)
          break_dur   = UtilityHelper.duration(shift[:break_begin], shift[:break_end])
          ota_dur     = UtilityHelper.duration(shift[:end], rlast)
          work_in     = rfirst
          work_out    = rlast

          if otb_dur > employee.timeshift.time_block
            #w_dur   = UtilityHelper.duration(shift[:begin], rlast)
            work_in = shift[:begin]
            ts.timeblocks << Timeblock.new_block("otb", rfirst, shift[:begin])
          end

          if ota_dur > employee.timeshift.time_block
            #w_dur   = UtilityHelper.duration(shift[:begin], shift[:end])
            work_out = shift[:end]
            ts.timeblocks << Timeblock.new_block("ota", shift[:end], rlast)
          end

          if break_dur > 0 && rfirst < shift[:break_begin]
            ts.timeblocks << Timeblock.new_block("break", shift[:break_begin], shift[:break_end])
          end
          
          # get block FILO in working time first in/last out
          ts.timeblocks << Timeblock.new_block("working", work_in, work_out)
        elsif raws.count == 1
          ts.timeblocks << Timeblock.new_block("filo", raws.first.time, raws.first.time)
        else
          false
        end
      when :machine then
        # depend on inout_mode of rawdata to get timeblock
      end

      ts.save
    end
  end
end
