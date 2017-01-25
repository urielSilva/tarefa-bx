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

  it 'fetches a stock' do
    get :fetch_stock, code: "PETR4"
    expect(response).to be_success
  end

  it 'fetches a stock with an invalid code' do
    get :fetch_stock, code: "LOTR"
    expect(response).to have_http_status(422)
  end
end
