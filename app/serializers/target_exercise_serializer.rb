class TargetExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :duration, :calories_burned
  has_one :target
  has_many :exercises
end
