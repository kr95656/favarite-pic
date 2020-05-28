class ItemsController < ApplicationController
 
  def index
    @items =  Item.all.includes(:user).order(created_at: :desc).page(params[:page]).per(10)
    @tags = Tag.all
  end

  def new  
    @item = Item.new
    @tags = Tag.all

    2.times{@item.tags.build}
  end

  
  def create
    # Item.create(item_params)

    # Item.create(item_params)
    @tags = Tag.all
    @item = Item.new(item_params)
    
    
    if @item.save 
      flash[:notice] = '投稿が完了しました。'
      redirect_to action: "index", notice: '投稿が完了しました。'
      #  render :index
      # render :index
    else #作れてなかったら
      flash.now[:alert] = '画像URL,タイトル,タグを入力してください。'
      render :new
    end
  end

  def destroy
    # item = Item.find(params[:id])
    # item.destroy
    item = Item.find(params[:id])

    if item.destroy
      flash[:notice] = '投稿を削除しました。'
      redirect_to action: "index", notice: '投稿を削除しました。'
    else 
      flash.now[:alert] = '投稿を削除できませんでした。'
      render :index
    end


  end

  def show
    @comment = Comment.new
    @item = Item.find(params[:id])
    @tags = Tag.all
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
    @items = Item.search(params[:keyword]).includes(:user).order(created_at: :desc).page(params[:page]).per(10)
    respond_to do |format|
      format.html
      format.json
    end
  end


  private
  def item_params
    params.require(:item).permit(:title, :image, :text, {tag_ids: []}).merge(user_id: current_user.id)
  end
  # def item_params
  #   params.require(:item).permit(:title, :image, :text, tag_ids: []).merge(user_id: current_user.id)
  # end

  # # 追加
  # def tag_params
  #   params.require(:tag).permit(:id)
  # end

  # def item_params
  #   params.require(:item).permit(:title, :image, :text, tag_ids: []).merge(user_id: current_user.id)
  # end

end
