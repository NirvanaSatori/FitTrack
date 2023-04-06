class User < ApplicationRecord
    has_secure_password
    has_many :targets, dependent: :destroy

    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :gender, presence: true
end
