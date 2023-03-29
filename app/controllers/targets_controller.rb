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
      # check if the user already has a target
      user_targets = Target.find_by(user_id: current_user.id)
      if user_targets.present?
        render json: { error: "User already has a target" }, status: :unprocessable_entity
      else
        # create a target associated with the current user
        target = Target.create(target_params.merge(user_id: current_user.id))
        render json: target, status: :created
      end
    end

    def update
      target = current_user.targets.find(params[:id])
      target.update(target_params)
      render json: target, status: :ok
    end
    def destroy
      target = current_user.targets.find(params[:id])
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
