class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :items, dependent: :destroy
  has_many :comments, dependent: :destroy
  
  validates :username, presence: true, uniqueness: true

  def self.guest
    find_or_create_by(email: 'guest@example.com') do |user|
      user.password = ENV["TEST_PASSWORD"]
      # user.password = Rails.application.secrets.test_account_pass
    end
  end
    


end
