Rails.application.routes.draw do
  
  resources :exercises
  resources :foods
  resources :targets
  resources :targets_foods
  resources :targets_exercises
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
