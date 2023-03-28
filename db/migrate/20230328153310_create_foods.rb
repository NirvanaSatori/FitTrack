class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :calories
      t.string :image_url
      t.string :food_type

      t.timestamps
    end
  end
end
