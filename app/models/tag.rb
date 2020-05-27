class Tag < ApplicationRecord
  has_many :item_tags, dependent: :destroy
  has_many :items, through: :item_tags, dependent: :destroy

  # validates :id, presence: true

  # validates :tag_ids, presence: true
  # validates_associated :item
end
