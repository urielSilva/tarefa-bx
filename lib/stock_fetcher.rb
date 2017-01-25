require 'net/http'

class StockFetcher
  # endpoint URL
  API_URL = "https://www.google.com/finance/info?q="

  def self.fetch(code)

    url = URI.parse("#{API_URL}#{code}")
    response =  Net::HTTP::get_response(url)
    #removing // from the response
    puts response 
    parse_response(response)

  end

  private

  def self.parse_response(response)
    JSON.parse(response.body[3..response.body.length]).first unless response.code == "400"
  end


end
