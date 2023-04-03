# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Food.destroy_all
Exercise.destroy_all
TargetFood.destroy_all
TargetExercise.destroy_all
Target.destroy_all
User.destroy_all


# Create Users
user1 = User.create(username: 'john_doe', email: 'john_doe@example.com', password_digest: 'password', gender: 'male')
user2 = User.create(username: 'jane_doe', email: 'jane_doe@example.com', password_digest: 'password', gender: 'female')
user3 = User.create(username: 'bob_smith', email: 'bob_smith@example.com', password_digest: 'password', gender: 'male')

# Create Target
target1 = Target.create(current_weight: 70, target_weight: 60, name: 'loose weight', user: user1)
target2 = Target.create(current_weight: 75, target_weight: 85, name: 'gain weight', user: user2)
target3 = Target.create(current_weight: 80, target_weight: 80, name: 'maintain weight', user: user3)


# Create Foods
food1 = Food.create(name: 'Salmon', calories: 350, food_type: 'Seafood', image_url: 'https://rb.gy/ulpw')
food2 = Food.create(name: 'Broccoli', calories: 55, food_type: 'Vegetable', image_url: 'https://rb.gy/cc35')
food3 = Food.create(name: 'Brown Rice', calories: 220, food_type: 'Grain', image_url: 'https://rb.gy/nfrx')

# Associate Foods with Target
TargetFood.create(target: target1, food: food1)
TargetFood.create(target: target1, food: food2)
TargetFood.create(target: target1, food: food3)

TargetFood.create(target: target2, food: food1)
TargetFood.create(target: target2, food: food2)

TargetFood.create(target: target3, food: food1)
TargetFood.create(target: target3, food: food3)

# Create Exercises
exercise1 = Exercise.create(name: 'Running', duration: 30, calories_burned: 300, image_url: 'https://rb.gy/yca2')
exercise2 = Exercise.create(name: 'Weightlifting', duration: 45, calories_burned: 200, image_url: 'https://rb.gy/vy45')
exercise3 = Exercise.create(name: 'Yoga', duration: 60, calories_burned: 150, image_url: 'https://rb.gy/c1tz')

# Associate Exercises with Target
TargetExercise.create(target: target1, exercise: exercise1)
TargetExercise.create(target: target1, exercise: exercise3)

TargetExercise.create(target: target2, exercise: exercise2)
TargetExercise.create(target: target2, exercise: exercise3)

TargetExercise.create(target: target3, exercise: exercise1)
TargetExercise.create(target: target3, exercise: exercise2)

