class CreateTargetsExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :targets_exercises do |t|
      t.references :target, null: false, foreign_key: true
      t.references :exercise, null: false, foreign_key: true

      t.timestamps
    end
  end
end
