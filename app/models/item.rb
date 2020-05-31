class Item < ApplicationRecord
  has_many    :item_tags, dependent: :destroy
  has_many    :tags, through: :item_tags, dependent: :destroy
  has_many    :comments, dependent: :destroy
  belongs_to  :user

  # accepts_nested_attributes_for :item_tags

  validates_associated :tags
  
  # validates :text, presence: true, unless: :image?
  # validates_associated :tags
  
  validates :image, :title, :tag_ids, presence: true 

  # mount_uploader :image, ImageUploader
  
  
  def self.search(search)
    if search
      Item.where(
        "(text LIKE(?)) OR (title LIKE(?))", "%#{search}%", "%#{search}%")
    else
      Item.all
    end
  end

end
