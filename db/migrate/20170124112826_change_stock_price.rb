class ChangeStockPrice < ActiveRecord::Migration[5.0]
  def change
    change_column :stocks, :price, :integer
    rename_column :stocks, :price, :quantity
  end
end
