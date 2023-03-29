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
        food = Food.create!(food_params)
        render json: food, status: :created
    end

    def destroy 
        food = Food.find(params[:id])
        food.delete 
        head :no_content
    end

    private
    def render_response_not_found
        render json:{error: ["Resource not found"]}, status: :not_found 
    end

    def food_params 
        params.permit(:name, :calories, :image_url, :food_type)
    end
end
