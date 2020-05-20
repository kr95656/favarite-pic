Rails.application.routes.draw do
  devise_for :users
  root "items#index"
  resources :items, only: [:index, :new, :create, :destroy]
  resources :users, only: [:edit, :update]
  resources :tags,  only: [:index, :new, :create]
end
