# The Channel show api will send back the users and messages for this channel
# These will be received by the frontend and update their respective slices of state

json.set! :channel do
    json.extract! @channel, :name, :id, :topic, :description, :creator_id, :channel_member_ids, :created_at
end

json.set! :members do 
    @channel.channel_members.each do |member|
        json.set! member.id do
            json.extract! member, :email, :id, :display_name, :status, :title
        end
    end
end

json.set! :current_user do
    json.extract! @current_user, :id
end

json.set! :messages do 
    @channel.messages.each do |message|
        json.set! message.id do 
            json.extract! message, :text, :id, :author_id, :messagable_id, :messagable_type
        end
    end
end