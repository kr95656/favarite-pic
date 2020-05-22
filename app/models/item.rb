class Item < ApplicationRecord
  belongs_to  :user
  has_many    :comments, dependent: :destroy
  has_many    :tags, through: :item_tags, dependent: :destroy
  has_many    :item_tags, dependent: :destroy
  
  validates :text, presence: true, unless: :image?
end
