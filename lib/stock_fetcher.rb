require 'net/http'
require 'uri'
class StockFetcher
  # endpoint URL
  API_URL = "https://www.google.com/finance/info?q="

  def self.fetch(code)
    # res = HTTP.get("#{API_URL}#{code}")

    uri = URI.parse("#{API_URL}#{code}")

    req = Net::HTTP::Get.new("#{API_URL}#{code}")
    req.add_field("User-Agent", "anything")
    http =  Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    res = http.start do |http|
      http.request(req)
    end
    puts res.body
    puts "#{API_URL}#{code}"
    puts res.code
    puts req
    parse_response(res)

  end

  private

  def self.parse_response(response)
    JSON.parse(response.body[3..response.body.length]).first unless response.code == "400"
  end


end
