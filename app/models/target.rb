class Target < ApplicationRecord
  belongs_to :user
  has_many :target_foods
  has_many :foods, through: :target_foods
  has_many :target_exercises
  has_many :exercises, through: :target_exercises

  validates :name, presence: true, inclusion: { in: ['loose weight', 'gain weight', 'maintain weight'], message: "%{value} is not a valid target" }

end
