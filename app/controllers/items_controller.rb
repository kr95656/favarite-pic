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
    @comment = Comment.new
    @item = Item.find(params[:id])
    @comments = @item.comments.includes(:user)
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
  end

  def search
    @items = Item.search(params[:keyword])
    respond_to do |format|
      format.html
      format.json
    end
  end


  private
  def item_params
    params.require(:item).permit(:title, :image, :text, tag_ids: []).merge(user_id: current_user.id)
  end

end
