class Timeshift
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  paginates_per 5

  TYPES = [ :auto, :filo, :machine ]

  field :name, type: String
  field :type, type: Symbol

  field :begin, type: String
  field :end, type: String
  field :break_begin, type: String
  field :break_end, type: String

  field :in_begin, type: String
  field :in_end, type: String
  field :out_begin, type: String
  field :out_end, type: String

  field :night_mode, type: Boolean
  field :ratio, type: Float
  field :late, type: Float
  field :early, type: Float

  field :time_block, type: Float

  def by_date(date)
    ret = Hash.new
    ["begin", "end", "break_begin", "break_end", "in_begin", "in_end", "out_begin", "out_end"].each do |att|
      ret[att.to_sym] = Time.parse("#{date.to_s} #{attributes[att]}:00")
    end
    ret
  end

  def ts_time_s
    "[#{self.begin} - #{self.end}]"
  end

  def in_time_s
    "[#{self.in_begin} - #{self.in_end}]"
  end

  def out_time_s
    "[#{self.out_begin} - #{self.out_end}]"
  end

  def break_time_s
    "[#{self.break_begin} - #{self.break_end}]"
  end

  validates_presence_of :name, :type
  validates_format_of :begin, with: TIME_VALID_FORMAT
  validates_format_of :end, with: TIME_VALID_FORMAT
  validates_format_of :break_begin, with: TIME_VALID_FORMAT, allow_blank: true
  validates_format_of :break_end, with: TIME_VALID_FORMAT, allow_blank: true
  validates_format_of :in_begin, with: TIME_VALID_FORMAT, allow_blank: true
  validates_format_of :in_end, with: TIME_VALID_FORMAT, allow_blank: true
  validates_format_of :out_begin, with: TIME_VALID_FORMAT, allow_blank: true
  validates_format_of :out_end, with: TIME_VALID_FORMAT, allow_blank: true
end