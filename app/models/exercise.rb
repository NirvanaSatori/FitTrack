class Exercise < ApplicationRecord
    has_many :target_exercises
    has_many :targets, through: :target_exercises

    validates :name, presence: true
    validates :duration, presence: true
    validates :image_url, presence: true
    validates :calories_burned, presence: true
    validates :calories_burned, inclusion: { in: 200..500 }, if: Proc.new { |exercise| exercise.targets.pluck(:name).include?('loose weight') }
    validates :calories_burned, inclusion: { in: 100..300 }, if: Proc.new { |exercise| exercise.targets.pluck(:name).include?('maintain weight') }
    validates :calories_burned, inclusion: { in: 400..800 }, if: Proc.new { |exercise| exercise.targets.pluck(:name).include?('gain weight') } 
end
