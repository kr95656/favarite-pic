class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.text :text, null: false
      t.text :title, null: false
      t.text :image, null: false
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
