class UsersController < ApplicationController
  def edit; end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def show
    @tags = Tag.all
    user = User.find(params[:id])
    @name = user.username
    @items = user.items.page(params[:page]).per(21).order(created_at: :desc)
    # @tags = Tag.all
    # @name = current_user.username
    # @items = current_user.items.page(params[:page]).per(10).order(created_at: :desc)
  end

  private

  def user_params
    params.require(:user).permit(:username, :email)
  end
end
