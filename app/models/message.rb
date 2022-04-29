class Message < ApplicationRecord
    validates :text, presence:true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :messagable, polymorphic: true

    # Returns all messages for a given channel or group
    def find_by_params(messagable_id, messagable_type)
        
    end
end
