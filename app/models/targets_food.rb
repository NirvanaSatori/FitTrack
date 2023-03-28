class TargetsFood < ApplicationRecord
  belongs_to :target
  belongs_to :exercise
end
