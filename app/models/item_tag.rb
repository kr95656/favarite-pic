class ItemTag < ApplicationRecord
  belongs_to :item
  belongs_to :tag

  # validates :tag_id, presence: true 
end
