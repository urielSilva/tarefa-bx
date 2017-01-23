class CreateStocks < ActiveRecord::Migration[5.0]
  def change
    create_table :stocks do |t|
      t.string :code
      t.float :price

      t.timestamps
    end
  end
end
