
class StockFetcher
  # endpoint URL
  API_URL = "https://www.google.com/finance/info?q="

  def self.fetch(code)
    res = HTTP.get("#{API_URL}#{code}")
    parse_response(res)
  end

  private

  def self.parse_response(response)
    JSON.parse(response.to_s[3..response.to_s.length]).first unless response.code == 400
  end


end
