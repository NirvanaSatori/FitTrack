class CreateTargetFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :target_foods do |t|
      t.references :target, null: false, foreign_key: true
      t.references :food, null: false, foreign_key: true

      t.timestamps
    end
  end
end
