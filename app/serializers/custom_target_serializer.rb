class CustomTargetSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_weight, :target_weight
  has_many :exercises
  has_many :foods
end
