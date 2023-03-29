class TargetsController < ApplicationController

    def index
        render json: Target.all, status: :ok
    end

    def show
        target = Target.find_by(id: params[:id])
      
        if target.present?
          render json: target, serializer: CustomTargetSerializer, status: :ok
        else
          render json: { error: "Target not found" }, status: :not_found
        end
      end
      
end
