class ItemsController < ApplicationController
 
  def index
    @items =  Item.all.includes(:user).order(created_at: :desc).page(params[:page]).per(5)
    @tags = Tag.all
  end

  def new
    @item = Item.new
  end

  def create
    Item.create(item_params)
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy
  end

  def show
    @item = Item.find(params[:id])
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
  end


  private
  def item_params
    params.require(:item).permit(:title, :image, :text, tag_ids: []).merge(user_id: current_user.id)
  end

end
