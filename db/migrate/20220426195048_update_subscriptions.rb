class UpdateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    change_column_null :subscriptions, :subscribable_id, false
    change_column_null :subscriptions, :subscribable_type, false
  end
end
