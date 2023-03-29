Rails.application.routes.draw do
  
  resources :users, only: [:create]
  resources :targets, except: [:index]
  resources :foods
  resources :exercises
  # resources :target_foods
  # resources :target_exercises
 
 

  post "/login", to:"sessions#login"
  get "/sessions", to: "sessions#index"
  delete "/logout", to: "sessions#logout"
  get "/me", to: "users#loggedin"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
