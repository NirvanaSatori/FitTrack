class ExercisesController < ApplicationController

   before_action :authorize
#   skip_before_action :authorize, only: [:index]
  
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
      render json: Exercise.all, status: :ok
    end

    def show
      exercise = Exercise.find(params[:id])
      render json: exercise, status: :ok
    end

    def create
        exercise = Exercise.create!(exercise_params)
        render json: exercise, status: :created
    end

    def update
        update_exercise_params = { 
            duration: params[:duration], 
            calories_burned: params[:calories_burned] }
        exercise = Exercise.find(params[:id])
        exercise.update!(update_exercise_params)
        render json: exercise, status: :ok
    end
      
    

    def destroy
      exercise = Exercise.find(params[:id])
      exercise.destroy
      head :no_content
    end


    private

    def render_not_found_response
      render json: { error: "exercise not found" }, status: :not_found
    end

    def exercise_params
      params.permit(:name, :duration, :image_url, :calories_burned)
    end
    
    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
