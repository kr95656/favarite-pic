class ItemsController < ApplicationController
 
  def index
    @items =  Item.all
    # @item = Item.find()
    @tags = Tag.all
  end

  def new
    @item = Item.new
  end

  def create
    Item.create(item_params)
  end

  private
  def item_params
    params.require(:item).permit(:title, :image, :text, tag_ids: []).merge(user_id: current_user.id)
  end

end
