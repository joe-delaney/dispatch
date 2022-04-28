# The Channel show api will send back the users and messages for this channel
# These will be received by the frontend and update their respective slices of state

json.set! :members do 
    @channel.channel_members.each do |member|
        json.set! member.id do
            json.extract! member, :email, :id, :display_name, :status, :title
        end
    end
end

json.set! :messages do 
    
end