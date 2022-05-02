class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :creator_id, null:false
      t.string :name, null:false
      t.string :topic
      t.string :description
      t.timestamps
    end
    add_index :channels, :name
    add_index :channels, :creator_id
  end
end
