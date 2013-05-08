# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :rawuser do
    machine_code ""
    enroll_number ""
    name ""
    password ""
  end
end
