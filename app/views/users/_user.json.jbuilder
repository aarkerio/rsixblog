json.extract! user, :id, :fname, :lname, :uname, :passwd, :active, :created_at, :updated_at
json.url user_url(user, format: :json)