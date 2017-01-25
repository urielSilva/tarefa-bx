class Stock < ApplicationRecord
  require 'stock_fetcher'

  before_create :update_quantity

  def as_json(options = {})
    super(options).merge({total: total_value})
  end

  def total_value
    stock = StockFetcher.fetch(self.code)
    quantity * stock["l_fix"].to_f if stock
  end

  def update_quantity
    existing_stock = Stock.where(code: self.code).first
    if existing_stock
      self.quantity += existing_stock.quantity
      existing_stock.destroy
    end
  end

end
