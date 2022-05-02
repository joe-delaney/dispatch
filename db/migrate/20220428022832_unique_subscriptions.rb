class UniqueSubscriptions < ActiveRecord::Migration[5.2]
  def change
    # A user can't subscribe to a channel or message group they are already subscribed to
    add_index :subscriptions, [:subscriber_id, :subscribable_id, :subscribable_type], unique: true, name: :unique_subscriptions
  end
end
