@group_messages.each do |group_message|
    json.set! group_message.id do 
        json.extract! group_message, :id, :group_member_ids, :hidden

        #message_ids
        message_ids = []
        sorted = group_message.messages.sort_by {|message| message.created_at}
        sorted.each do |message|
            message_ids << message.id
        end
        json.message_ids message_ids

        #name
        name = ""
        group_message.group_members.each do |group_member| 
            if group_member.id != @current_user.id
                name += "#{group_member.display_name}, "
            end
        end
        json.name name[0...-2]
    end
end