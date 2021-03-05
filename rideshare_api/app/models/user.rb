class User < ApplicationRecord
  has_secure_password
  has_many :reviews, -> { order('updated_at DESC') }, dependent: :destroy 
  has_many :customers, dependent: :destroy
  


  validates(:email, presence: true, uniqueness: true)
  geocoded_by :address
  after_validation :geocode


end
