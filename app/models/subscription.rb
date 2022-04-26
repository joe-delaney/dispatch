class Subscription < ApplicationRecord
    validates :subscriber_id, :subscribable_id, :subscribable_type, presence:true

    belongs_to :subscribable, polymorphic: true

    belongs_to :subscriber, 
        foreign_key: :subscriber_id,
        class_name: :User

end
