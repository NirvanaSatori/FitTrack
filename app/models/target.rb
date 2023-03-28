class Target < ApplicationRecord
    has_many :foods
    has_many :exercises
    belongs_to :user
    validates :name, inclusion: {in: %w("Lose weight","Maintain weight", "Add weight")}
end
