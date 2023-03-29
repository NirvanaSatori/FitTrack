class TargetsController < ApplicationController

  before_action :authorize
  skip_before_action :authorize, only: [:index]
  
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
      render json: Target.all, status: :ok
    end

    def show
      target = Target.find(params[:id])
      render json: target, serializer: CustomTargetSerializer, status: :ok
    end

    def create
        target = Target.create!(target_params.merge(user_id: @current_user.id))
        render json: target,serializer: CustomTargetSerializer, status: :created
    end

    def update
      update_target_params = { 
        current_weight: params[:current_weight], 
        target_weight: params[:target_weight] }
      target = @current_user.targets.find(params[:id])
      target.update!(update_target_params)
      render json: target, serializer: CustomTargetSerializer, status: :ok
    end
    

    def destroy
      target = @current_user.targets.find(params[:id])
      target.destroy
      head :no_content
    end


    private

    def render_not_found_response
      render json: { error: "Target not found" }, status: :not_found
    end

    def target_params
      params.permit(:name, :current_weight, :target_weight)
    end
    
    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
