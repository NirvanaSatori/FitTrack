class CreateTargetExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :target_exercises do |t|
      t.references :target, null: false, foreign_key: true
      t.references :exercise, null: false, foreign_key: true

      t.timestamps
    end
  end
end
