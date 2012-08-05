source 'http://rubygems.org'

gem 'rails', '3.1.4'

# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'

group :development do
  gem 'mysql'
  gem 'mailcatcher'
end

group :production do
  gem 'pg'
  
  # Use unicorn as the web server
  gem 'unicorn'
end

# Bundle gems for the local environment. Make sure to
# put test-only gems in this group so their generators
# and rake tasks are available in development mode:
group :development, :test do
  # gem 'webrat'
  # gem "capybara"
  # gem 'cucumber-rails', '1.3.0'
  gem 'nifty-generators'
  gem 'hpricot'
  gem 'ruby_parser'
end

group :test do
  gem "mocha"
  # Pretty printed test output
  gem 'turn', '0.8.2', :require => false
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.1.5'
  gem 'coffee-rails', '~> 3.1.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'
end

gem 'heroku'
gem "airbrake"
gem "omniauth", "~> 0.2.0"
gem "haml", ">= 3.0.0"
gem 'haml-rails'
gem "slim"
gem "slim-rails"
gem 'fastercsv'
gem "friendly_id", "~> 4.0.0.beta14"
gem 'stringex'
gem 'sorcery'
gem 'rspec'
gem 'paperclip', '2.7'
gem 'aws-s3'
gem 'aws-sdk'
gem 'nested_form', :git => 'git://github.com/ryanb/nested_form.git'
gem 'pacecar'
gem 'kumade'
# gem 'stripe', :git => 'https://github.com/stripe/stripe-ruby'
gem 'jquery-rails', '>= 1.0.12'
gem 'state_machine'
gem 'phone-validator'
gem 'sass'
gem 'surveyor'
gem 'declarative_authorization'
gem 'newrelic_rpm'
gem 'acts_as_follower'
gem 'rqrcode-rails3'
gem 'mini_magick'
