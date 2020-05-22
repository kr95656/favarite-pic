json.array! @items do |item|
  json.id       item.id
  json.text     item.text
  json.image    item.image
  json.title    item.title
  json.name     item.user.username
  json.user_id  item.user_id
  json.user_sign_in current_user
end