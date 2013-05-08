module UtilityHelper
  def self.duration(from, to)
    ((to - from)/60).round
  end
end