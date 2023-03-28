class Target < ApplicationRecord
    has_many :foods
    has_many :exercises
    belongs_to :user

end
