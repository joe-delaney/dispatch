@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :name, :id, :topic, :description, :creator_id, :channel_member_ids, :created_at, :message_ids
    end
end