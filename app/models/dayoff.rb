class Dayoff
  include Mongoid::Document
  include Mongoid::MultiParameterAttributes
  include Mongoid::Timestamps::Created
  
  paginates_per 5

  OCCUR_TYPES = [:yearly, :monthly, :once]
  OCCUR_FORMATS = { :yearly => "%m-%d", :monthly => "%d", :once => "%Y-%m-%d" }

  field :name, type: String
  field :type, type: String
  field :occur, type: Symbol
  field :date, type: Date

  validates_presence_of :name
  validates_presence_of :type
  validates_presence_of :occur

  def date_s
    return false if !date?
    date.strftime(OCCUR_FORMATS[occur])
  end

  OCCUR_TYPES.each do |type|
    scope "#{type}_days", where("occur" => type)
  end

  def off?(date, format)
    self.date.strftime(format) == date.strftime(format)
  end

  class << self
    def by_date(date)
      OCCUR_TYPES.each do |type|
        send("#{type}_days").each do |d| 
          return d if d.off?(date, OCCUR_FORMATS[type])
        end
      end
      nil
    end

    def offday?(date)
      return true if by_date(date)
      false
    end
  end
end
