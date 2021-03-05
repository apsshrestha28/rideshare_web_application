class Customer < ApplicationRecord
  has_secure_password
  has_many :reviews, dependent: :nullify
  has_many :users, dependent: :nullify

  
  validates(:email, presence: true, uniqueness: true)
  geocoded_by :address
  after_validation :geocode
end
