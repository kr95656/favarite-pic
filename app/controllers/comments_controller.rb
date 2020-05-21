class CommentsController < ApplicationController

  def create
    Comment.create(comment_params)
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current.id, item_id: params[:item_id])
  end

end
