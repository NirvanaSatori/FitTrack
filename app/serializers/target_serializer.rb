class TargetSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_weight, :target_weight, :calories_goal
  has_one :user
end
