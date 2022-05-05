class AddHiddenColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :group_messages, :hidden, :boolean, :default => false
  end
end
