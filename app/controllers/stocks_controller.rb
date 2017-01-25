class StocksController < ApplicationController
  require 'stock_fetcher'

  def index
    render json: Stock.all.order(:code)
  end

  def create
    stock = Stock.new(stock_params)
    if stock.save
      render json: Stock.all
    end
  end

  def fetch_stock
    stock = StockFetcher.fetch(params[:code])
    puts stock
    if stock
      render json: {code: stock["t"], price: stock["l_fix"].to_f, price_formatted: stock["l_cur"]}
    else
      render json: {}, status: 422
    end
  end

  private

  def stock_params
    params[:stock].permit(:code, :quantity)
  end
end
