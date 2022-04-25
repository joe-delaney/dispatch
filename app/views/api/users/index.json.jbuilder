@users.each do |user|
    json.set! user.id do
        json.extract! user, :email, :id, :display_name, :status, :title
    end
end