class TagsController < ApplicationController
  before_action :tag_show, only: %i[index show]

  def index; end

  def show
    @tag = Tag.find(params[:id])
    @tags_pagenate = @tag.items.order(created_at: :desc).page(params[:page]).per(10)
  end

  private

  def tag_show
    @tags = Tag.all.includes(:items)
  end
end
