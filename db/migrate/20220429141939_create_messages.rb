class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :text, null:false
      t.integer :author_id, null:false
      t.references :messagable, polymorphic: true
      t.timestamps
    end
    add_index :messages, :author_id
    add_index :messages, [:messagable_id, :messagable_type]
  end
end
