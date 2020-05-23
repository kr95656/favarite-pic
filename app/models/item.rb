class Item < ApplicationRecord
  has_many    :item_tags, dependent: :destroy
  has_many    :tags, through: :item_tags, dependent: :destroy
  has_many    :comments, dependent: :destroy
  belongs_to  :user
  
  validates :text, presence: true, unless: :image?

  def self.search(search)
    if search
      Item.where('text LIKE(?)', "%#{search}%")
    else
      Item.all
    end
  end

end
