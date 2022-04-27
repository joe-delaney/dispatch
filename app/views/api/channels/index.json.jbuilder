@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :name, :id, :topic, :description
        member_ids = []
        channel.channel_members.each do |member|
            member_ids << member.id
        end
        json.member_ids member_ids
        json.num_members member_ids.length
    end
end