class Subscription < ApplicationRecord
    validates :subscriber_id, :subscribable_id, :subscribable_type, presence:true

    belongs_to :subscribable, polymorphic: true

    belongs_to :subscriber, 
        foreign_key: :subscriber_id,
        class_name: :User

    def Subscription.find_by_params(subscriber_id, subscribable_id, subscribable_type)
        sub = Subscription.where("subscriber_id = '#{subscriber_id}' AND subscribable_id = '#{subscribable_id}' AND subscribable_type = '#{subscribable_type}'")
        return sub
    end
end

