class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :post
      t.string :image_url
      t.datetime :made_at
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
