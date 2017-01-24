Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/stocks', to: 'stocks#index'
  get '/stocks/:code', to: 'stocks#fetch_stock'
end
