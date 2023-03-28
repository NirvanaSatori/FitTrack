class Food < ApplicationRecord
    has_many :target_foods
    has_many :targets, through: :target_foods

    validates :name, presence: true
    validates :calories, presence: true
    validates :image_url, presence: true
    validates :food_type, presence: true
    validates :calories, inclusion: { in: 1800..2600 }, if: Proc.new { |food| food.targets.pluck(:name).include?('maintain weight') }
    validates :calories, inclusion: { in: 2500..3500 }, if: Proc.new { |food| food.targets.pluck(:name).include?('gain weight') }
    validates :calories, inclusion: { in: 1200..2000 }, if: Proc.new { |food| food.targets.pluck(:name).include?('loose weight') }
end
