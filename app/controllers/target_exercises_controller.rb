class TargetExercisesController < ApplicationController
    def index
      user = User.find(params[:user_id])
      target = user.targets.find(params[:target_id])
      target_exercises = target.target_exercises.includes(:exercise)
  
      render json: target_exercises, each_serializer: TargetExerciseSerializer
    end
  end
  