require 'net/http'
require 'uri'
class StockFetcher
  # endpoint URL
  API_URL = "http://www.google.com/finance/info?q="

  def self.fetch(code)

    uri = URI.parse("#{API_URL}#{code}")
    req = Net::HTTP::Get.new(uri.to_s)
    req.add_field("User-Agent", "anything")
    res = Net::HTTP.new(uri.host, uri.port).start do |http|
      http.request(req)
    end
    parse_response(res)

  end

  private

  def self.parse_response(response)
    JSON.parse(response.body[3..response.body.length]).first unless response.code == "400"
  end


end
