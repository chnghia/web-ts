class Employeeoff
  include Mongoid::Document
  field :date, type: Date
  field :type, type: String

  embedded_in :employee
end
