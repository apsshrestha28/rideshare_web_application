Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

  namespace :api, default: { format: :json } do
    namespace :v1 do
      root :to =>"welcome#index"
    
      resources :customers, only: [:index, :create, :new,:show, :update]
    
      resources :sessions, only: [:create, :show, :new]
      delete('/sign_out', to: 'sessions#destroy')  
      get('/current_user', to: 'sessions#get_current_user')

      get('/users/:user_id/reviews' , to:'reviews#show')
      
      get('/users/:user_id/ride_requests' , to:'ride_requests#show')
      patch('/ride_requests/:id', to:'ride_requests#update')
      get('/ride_requests' , to:'ride_requests#index')

      resources :users do
        resources :reviews, only: [:create] 
        resources :ride_requests, only: [:create, :new, :destroy]
      end
    end
  end
end
