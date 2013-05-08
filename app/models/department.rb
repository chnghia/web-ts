class Department
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  paginates_per 5

  field :name, type: String

  validates_presence_of :name

  has_many :employees
end