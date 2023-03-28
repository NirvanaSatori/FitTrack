class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :image_url, :calories_burned
end
