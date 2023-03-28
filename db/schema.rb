# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_28_194009) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.integer "duration"
    t.string "image_url"
    t.integer "calories_burned"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.integer "calories"
    t.string "image_url"
    t.string "food_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "target_exercises", force: :cascade do |t|
    t.bigint "target_id", null: false
    t.bigint "exercise_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["exercise_id"], name: "index_target_exercises_on_exercise_id"
    t.index ["target_id"], name: "index_target_exercises_on_target_id"
  end

  create_table "target_foods", force: :cascade do |t|
    t.bigint "target_id", null: false
    t.bigint "food_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["food_id"], name: "index_target_foods_on_food_id"
    t.index ["target_id"], name: "index_target_foods_on_target_id"
  end

  create_table "targets", force: :cascade do |t|
    t.string "name"
    t.integer "current_weight"
    t.integer "target_weight"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_targets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "gender"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "target_exercises", "exercises"
  add_foreign_key "target_exercises", "targets"
  add_foreign_key "target_foods", "foods"
  add_foreign_key "target_foods", "targets"
  add_foreign_key "targets", "users"
end
