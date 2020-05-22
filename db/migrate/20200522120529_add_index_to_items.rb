class AddIndexToItems < ActiveRecord::Migration[5.2]
  def change
    add_index :items, :text, length: 32
  end
end
