class FoodsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_response_not_found
    skip_before_action :authorize

    def index 
        food = Food.all 
        render json: food
    end

    def show 
        food = Food.find(params[:id])
        render json: food 
    end

    def create 
    end

    private
    def render_response_not_found
        render json:{error: ["Resource not found"]}, status: :not_found 
    end

    def food_params 
        params.permit()
    end
end
