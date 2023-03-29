class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def loggedin
        user = User.find_by(id: session[:user_id] ) 
        if user
           render json: {user: user, loggedin: true}
        else
           render json: {loggedin: false}
        end      
      end

    private 

    def user_params
        params.permit(:username, :email, :password, :gender, :password_confrimation)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
