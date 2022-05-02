@users.each do |user|
    json.set! user.id do
        json.extract! user, :email, :id, :display_name, :status, :title

        Get the channels the current user is subscribed to
        if user.id == @current_user_id
            subscribed_channel_ids = []
            user.subscribed_channels.each do |channel|
                subscribed_channel_ids << channel.id
            end
            json.subscribed_channels subscribed_channel_ids
        end
    end  
end