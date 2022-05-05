Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :create, :show, :update, :destroy]
    resources :subscriptions, only: [:create, :destroy]
    resources :messages, only: [:create, :update]
    resources :group_messages, only: [:index, :create, :show, :update]
  end
end
