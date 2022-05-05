class GroupMessage < ApplicationRecord
    has_many :subscriptions, as: :subscribable, dependent: :destroy
    has_many :messages, as: :messagable, dependent: :destroy

    has_many :group_members,
        through: :subscriptions,
        source: :subscriber

    def is_direct_message? 
        this.group_members.length == 2
    end

    def self.group_messages_for_current_user(current_user) 

    end
end
