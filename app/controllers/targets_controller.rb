class TargetsController < ApplicationController

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
      user_targets = Target.find(:user_id)
      if user_targets.present?
        render json: { error: "User already has a target" }, status: :unprocessable_entity
      else
        target = Target.create(target_params.merge(user_id: current_user.id))
        render json: target, status: :created
      end
    end

    # def update
      
    # end

    # def destroy
      
    # end

    private

    def render_not_found_response
      render json: { error: "Target not found" }, status: :not_found
    end

    def target_params
      params.permit(:name, :current_weight, :target_weight, :user_id)
    end
    
    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
