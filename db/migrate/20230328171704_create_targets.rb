class CreateTargets < ActiveRecord::Migration[6.1]
  def change
    create_table :targets do |t|
      t.string :name
      t.integer :current_weight
      t.integer :target_weight
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
