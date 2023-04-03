class TargetSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_weight, :target_weight
 
  has_many :target_foods
  has_many :target_exercises

end
