class Timeblock
  include Mongoid::Document
  include UtilityHelper
  
  field :t_in, type: Time
  field :t_out, type: Time
  field :duration, type: Float
  field :ratio, type: Float
  field :type, type: String

  embedded_in :timesheet

  def t_in_s
    t_in.strftime(TIME_FORMAT)
  end

  def t_out_s
    t_out.strftime(TIME_FORMAT)
  end

  class << self
    def new_block(type, t_in, t_out)
      new(:type => type, :t_in => t_in, :t_out => t_out, :duration => UtilityHelper.duration(t_in, t_out))
    end
  end
end
