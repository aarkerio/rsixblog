class Post < ApplicationRecord
  belongs_to :user

  def self.create_post(params, user_id)
    params[:user_id] = user_id
    new_post = new params
    new_post.save
    new_post
  end
end
