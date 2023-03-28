class User < ApplicationRecord
    has_many :targets

    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
end
