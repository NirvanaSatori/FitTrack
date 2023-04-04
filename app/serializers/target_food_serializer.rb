class TargetFoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :calories, :food_type
  has_one :target
  has_many :foods
end
