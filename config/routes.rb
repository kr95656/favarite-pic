Rails.application.routes.draw do
  devise_for :users
  root "items#index"
  resources :tags,  only: [:index, :new, :create, :show] 
  resources :items, only: [:index, :new, :create, :destroy, :show, :edit, :update] do
    resources :comments, only: [:create]
    collection do
      get 'search'
    end
  end
  namespace :api do
    resources :items, only: :index, defaults: {format: 'json'}
  end
  resources :users, only: [:edit, :update, :show]
end
