class TargetSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_weight, :target_weight, :user_id
end
