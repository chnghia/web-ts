# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :timesheet do
    employee ""
    machine_code ""
    date ""
    time ""
  end
end
