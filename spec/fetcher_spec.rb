require 'spec_helper'
require 'rails_helper'
require 'stock_fetcher'

RSpec.describe 'Stock Fetcher' do
  it 'fetches a stock from a given code' do
    code = 'PETR4'
    expect(StockFetcher.fetch(code)).to_not be_nil
  end

  it 'returns nil when the code is not found' do
    code = 'LOTR'
    expect(StockFetcher.fetch(code)).to be_nil
  end

end
