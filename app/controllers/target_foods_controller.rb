class TargetFoodsController < ApplicationController
    def index
      target_foods = TargetFood.where(target_id: params[:target_id])
      render json: target_foods, each_serializer: TargetFoodSerializer
    end
  end
  