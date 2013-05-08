# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Rails3MongoidDevise::Application.initialize!

ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
  if html_tag =~ /<label/
    %|<div class="fieldWithErrors">#{html_tag} <span class="error">#{[instance.error_message].join(', ')}</span></div>|.html_safe
  else
    html_tag
  end
end

TIME_VALID_FORMAT         = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/
TIME_FORMAT               = "%H:%M"