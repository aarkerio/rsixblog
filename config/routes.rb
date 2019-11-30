Rails.application.routes.draw do
  get 'posts/index'
  get 'welcome/index'
  namespace :api do
    resources :posts
  end
  resources :users
end
