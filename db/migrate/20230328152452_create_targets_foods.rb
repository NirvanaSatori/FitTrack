class CreateTargetsFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :targets_foods do |t|
      t.references :target, null: false, foreign_key: true
      t.references :exercise, null: false, foreign_key: true

      t.timestamps
    end
  end
end
