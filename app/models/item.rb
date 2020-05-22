class Item < ApplicationRecord
  belongs_to  :user
  has_many    :comments, dependent: :destroy
  has_many    :tags, through: :item_tags, dependent: :destroy
  has_many    :item_tags, dependent: :destroy
  
  validates :text, presence: true, unless: :image?

  def self.search(search)
    if search
      Item.where('text LIKE(?)', "%#{search}%")
    else
      Item.all
    end
  end

end
