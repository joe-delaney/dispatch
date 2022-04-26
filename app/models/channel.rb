class Channel < ApplicationRecord
    validates :creator_id, :name, presence:true

    belongs_to :channel_creator,
        foreign_key: :creator_id,
        class_name: :User
end
