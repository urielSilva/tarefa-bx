class StockInfo extends React.Component {

  constructor() {
    super();
    this.state = {quantity: '', total: 0};
    this.setQuantity = this.setQuantity.bind(this);
    this.formattedTotal = this.formattedTotal.bind(this);
    this.buyStock = this.buyStock.bind(this);
  }

  setQuantity(event) {
    let total = this.props.stock.price * event.target.value;
    this.setState({quantity: event.target.value, total: total});

  }
  buyStock() {
    $.ajax({
      url: '/stocks',
      contentType: 'application/json',
      type: 'post',
      data: JSON.stringify({code: this.props.stock.code,
        quantity: this.state.quantity}),
      success: (response) => {
        console.log(response);

      }
    });
  }

  formattedTotal() {
    return this.state.total > 0 ? `R$${this.state.total.toFixed(2)}` : `R$ 0.00`;
  }

  render() {
    return (
        <div className="stock-info">
          <div className="info ui segment">
            <p>{this.props.stock.code}</p>
            <span >|</span>
            <p>{this.props.stock.price_formatted}</p>
          </div>
          <div className="quantity ui input">
            <input type="text" value={this.state.quantity} onChange={this.setQuantity}
            placeholder="Quantity"/>
          </div>
          <div className="total ui segment">
            <p>{this.formattedTotal()}</p>
          </div>
          <button className="ui big green button" style={{"marginLeft": "5px",
          "height": "49px"}} onClick={this.buyStock}>Buy</button>
        </div>
    )
  }
}
