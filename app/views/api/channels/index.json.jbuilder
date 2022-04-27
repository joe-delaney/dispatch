@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :name, :id, :topic, :description, :channel_member_ids
    end
end