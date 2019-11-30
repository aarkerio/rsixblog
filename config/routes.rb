Rails.application.routes.draw do
  get 'posts/index'
  resources :users
  get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :posts
  end
end
