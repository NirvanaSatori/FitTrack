class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :duration
      t.string :image_url
      t.integer :calories_burned

      t.timestamps
    end
  end
end
