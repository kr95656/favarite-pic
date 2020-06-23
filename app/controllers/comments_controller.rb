class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params)
    if @comment.save
      respond_to do |format|
        format.html { redirect_to items_path(params: [:item_id]) }
        # format.html {redirect_to "/items/#{comment.item.id}"}
        format.json
      end
    else
      redirect_to items_path(params: [:item_id])
    end
    # @comment = Comment.create(comment_params)
    # respond_to do |format|
    #   format.html {redirect_to items_path(params:[:item_id])}
    #   # format.html {redirect_to "/items/#{comment.item.id}"}
    #   format.json
    # end
  end

  private

  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, item_id: params[:item_id])
  end
end
