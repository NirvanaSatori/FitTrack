class CreateTargets < ActiveRecord::Migration[6.1]
  def change
    create_table :targets do |t|
      t.string :name
      t.integer :current_weight
      t.integer :target_weight
      t.integer :user_id

      t.timestamps
    end
  end
end
