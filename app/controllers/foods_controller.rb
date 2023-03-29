class FoodsController < ApplicationController

    skip_before_action :authorize

    def index 
        food = Food.all 
        render json: food
    end
end
