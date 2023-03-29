class SessionsController < ApplicationController

    # skip_before_action :authorize, only: [:login, :index]

    def index
        user = User.all
        render json: user.to_json
    end

    def login        
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else 
            render json: {error: ["Invalid email or password "] }, status: :unauthorized
        end
    end

    def logout
        session.delete [:user_id]
        head :no_content
    end

end
