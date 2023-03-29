class CustomTargetSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_weight, :target_weight
  belongs_to :user
end
