class TargetsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
      render json: Target.all, status: :ok
    end

    def show
      target = Target.find(params[:id])
      render json: target, serializer: CustomTargetSerializer, status: :ok
    end

    private

    def render_not_found_response
      render json: { error: "Target not found" }, status: :not_found
    end
        
end
