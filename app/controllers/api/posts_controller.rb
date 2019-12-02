class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    Rails.logger.debug "####  POST PARAMS #################>>>  #{post_params}"
    current_user_id = 1
    @post = Post.create_post(post_params, current_user_id)
    if @post.id
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post, status: :ok
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :no_content
  end

  private

  def post_params
    params[:post][:title] = params[:post_title]
    params[:post][:post]  = params[:post_post]

    params.require(:post).permit(:title, :post)
  end
end
