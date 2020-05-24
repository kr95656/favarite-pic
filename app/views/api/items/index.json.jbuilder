json.array! @items do |item|
  json.text item.text
  json.image item.image
  json.created_at item.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.user_name item.user.username
  json.title item.title
  json.id item.id
  json.user_sign_in current_user
end
