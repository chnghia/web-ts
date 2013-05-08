Rails3MongoidDevise::Application.routes.draw do

  resources :dayoffs

  resources :rawusers

  resources :timesheets

  resources :rawdata

  resources :employees

  resources :departments

  resources :timeshifts

  match "/rawdata-import"           => "rawdata#import"
  match "/rawusers-import"          => "rawusers#import"
  match "/rawusers-sync-pc"         => "rawusers#syncpc"
  match "/settings"                 => "settings#show"
  match "/settings/departments"     => "settings#departments"
  match "/settings/timeshifts"      => "settings#timeshifts"
  match "/settings/dayoffs"         => "settings#dayoffs"
  match "/settings/messages"        => "settings#messages"


  authenticated :user do
    root :to => 'home#index'
  end
  devise_for :users
  root :to => "home#index"
  resources :users, :only => [:show, :index]
end
