class TagsController < ApplicationController
  
  def index
    @tags = Tag.all
  end

  def show
    # @tag = Tag.find(params[:id])
    # @tags = Tag.all
    # items = Item.all
    # @tags_pagenate = @tag.items.order(created_at: :desc).page(params[:page]).per(10)


    @tag = Tag.find(params[:id])
    @tags = Tag.all
    # items = Item.all
    @tags_pagenate = @tag.items.order(created_at: :desc).page(params[:page]).per(10)
  end

end
