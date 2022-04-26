class Subscription < ApplicationRecord
    validates :subscriber_id, :subscribable_id, :subscribable_type, presence:true
end
