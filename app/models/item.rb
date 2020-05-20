class Item < ApplicationRecord
  belongs_to  :user
  # has_many    :comments
  # has_many    :tags, through: :item_tags
  # has_many    :item_tags
  
  validates :text, presence: true, unless: :image?
end
