json.set! :group do
    json.extract! group, :id, :group_member_ids

    #message_ids
    message_ids = []
    sorted = group.messages.sort_by {|message| message.created_at}
    sorted.each do |message|
        message_ids << message.id
    end
    json.message_ids message_ids

    #name
    name = ""
    group.group_members.each do |group_member| 
        if group_member.id != current_user.id
            name += "#{group_member.display_name}, "
        end
    end
    json.name name[0...-2]
end

json.set! :members do 
    group.group_members.each do |member|
        json.set! member.id do
            json.extract! member, :email, :id, :display_name, :status, :title, :subscribed_channel_ids
        end
    end
end

json.set! :messages do 
    group.messages.each do |message|
        json.set! message.id do 
            json.extract! message, :text, :id, :author_id, :messagable_id, :messagable_type, :created_at, :edited
        end
    end
end