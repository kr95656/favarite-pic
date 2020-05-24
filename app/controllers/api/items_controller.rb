class Api::ItemsController < ApplicationController

  def index
    item = Item.all
    last_item_id = params[:id].to_i
    @items = item.includes(:user).where("id > ?",last_item_id)
    # item = Item.find(params[:item_id])
    # last_item_id = params[:id].to_i
    # @items = item.includes(:user).where("id > ?",last_item_id)
  end

end