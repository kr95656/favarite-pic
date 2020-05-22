class UsersController < ApplicationController

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def show
    @name = current_user.username
    @items = current_user.items
  end

  private

  def user_params
    params.require(:user).permit(:username, :email)
  end



end
