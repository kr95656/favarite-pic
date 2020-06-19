Rails.application.routes.draw do
  
  devise_for :users, :controller => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'
  } 
  
  devise_scope :user do
    get "sign_in", :to => "users/sessions#new"
    get "sign_out", :to => "users/sessions#destroy" 
    post 'users/guest_sign_in', to: 'users/sessions#new_guest'
  end
  
  
  root "items#index"
  
  resources :tags,  only: [:index, :new, :create, :show] 
  
  resources :items, only: [:index, :new, :create, :destroy, :show, :edit, :update] do
    resources :comments, only: [:create]
    collection do
      get 'search'
    end
  end
  
  resources :users, only: [:edit, :update, :show]
  
end
