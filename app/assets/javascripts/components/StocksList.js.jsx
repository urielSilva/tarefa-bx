class StocksList extends React.Component {

  constructor() {
    super();
    this.formattedTotal = this.formattedTotal.bind(this);
  }

  formattedTotal(stock) {
    return stock.total > 0 ? `R$${stock.total.toFixed(2)}` : `R$ 0.00`;
  }

  render() {
    return (
        <div className="stock-list">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
                {this.props.stocks.map((stock) => {
                  return (
                    <tr key={stock.code}>
                      <td>{stock.code}</td>
                      <td>{stock.quantity}</td>
                      <td>{this.formattedTotal(stock)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
    );
  }
}
