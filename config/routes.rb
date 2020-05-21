Rails.application.routes.draw do
  devise_for :users
  root "items#index"
  resources :tags,  only: [:index, :new, :create, :show] 
  resources :items, only: [:index, :new, :create, :destroy] 
  resources :users, only: [:edit, :update]
end
