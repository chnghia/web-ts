class Employee
  include Mongoid::Document
  include Mongoid::Timestamps::Created

  SYNC_TYPES = [:to_pc, :from_pc]

  paginates_per 5

  field :name, type: String
  field :employee_code, type: String
  field :work_from, type: Date
  field :gender, type: String
  field :status, type: String

  field :enroll_number, type: String
  field :machine_name, type: String
  field :machine_password, type: String
  field :machine_privilege, type: Integer
  field :machine_enabled, type: Boolean
  field :machine_card, type: String  

  validates_presence_of :name
  validates :enroll_number, presence: true, uniqueness: true

  embeds_many :employeeoffs
  has_many :timesheets
  belongs_to :user
  belongs_to :department
  belongs_to :timeshift

  def timed_rawlist(from, to)
    Rawdatum.timed_between(self.enroll_number, from, to)
  end

  class << self
    def synchronize(type)
      if (type == :to_pc)
        Rawuser.each do |raw|
          if where(enroll_number: raw.enroll_number).exists?
            e = find_by(enroll_number: raw.enroll_number)
            e.attributes = { machine_password: raw.password, machine_name: raw.name, machine_enabled: raw.enabled}
            e.save
          else
            create(enroll_number: raw.enroll_number,
                   name: raw.name,
                   machine_password: raw.password,
                   machine_enabled: raw.enabled,
                   machine_name: raw.name)
          end
        end
      else
      end
    end
  end
end