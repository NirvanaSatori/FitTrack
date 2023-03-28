class TargetExerciseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :target
  has_one :exercise
end
