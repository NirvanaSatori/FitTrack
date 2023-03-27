class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :image_url, :target_id
end
