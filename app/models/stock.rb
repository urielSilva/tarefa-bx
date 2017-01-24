class Stock < ApplicationRecord
  require 'stock_fetcher'
  def as_json(options = {})
    super(options).merge({total: total_value})
  end

  def total_value
    stock = StockFetcher.fetch(self.code)
    quantity * stock["l_fix"].to_f if stock
  end


end
