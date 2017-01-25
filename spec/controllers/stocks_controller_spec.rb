require 'rails_helper'

RSpec.describe StocksController, type: :controller do
  it 'saves a stock' do
    post :create, {stock: {code: 'PETR4', quantity: 10}}
    expect(Stock.all.size).to eq 1
  end

  it 'saves an already existing stock' do
    post :create, {stock: {code: 'PETR4', quantity: 10}}
    post :create, {stock: {code: 'PETR4', quantity: 20}}
    expect(Stock.first.quantity).to eq 30
    expect(Stock.all.size).to eq 1
  end
end
