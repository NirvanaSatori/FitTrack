class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :image_url, :food_type
end
