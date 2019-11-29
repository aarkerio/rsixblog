class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :post, :made_at
end
