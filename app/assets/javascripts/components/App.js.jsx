class App extends React.Component {

  constructor() {
    super();
    this.searchCallback = this.searchCallback.bind(this);
    this.purchaseCallback = this.purchaseCallback.bind(this);
    this.state = {stocksList: [], stock: '', isStockVisible: false};
  }

  componentWillMount() {
    $.ajax({
      url: '/stocks',
      type: 'get',
      success: (response) => {
        this.setState({stocksList: response});
      }
    })
  }

  searchCallback(stock) {
    this.setState({stock: stock, isStockVisible: Object.keys(stock).length != 0});
  }

  purchaseCallback(stocksList) {
    this.setState({stocksList: stocksList});
  }


  render() {
    return (
        <div>
          <SearchBar searchCallback={this.searchCallback}/>
          {this.state.isStockVisible ?
            <StockInfo purchaseCallback={this.purchaseCallback} stock={this.state.stock}/> :
            <div className="ui info message">
              <div className="header">Digite o código de uma ação para ver sua cotação.</div>
            </div>
           }
          <StocksList stocks={this.state.stocksList} />
        </div>
    )
  }
}
