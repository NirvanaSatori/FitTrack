class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :gender
end
