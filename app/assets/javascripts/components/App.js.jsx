class App extends React.Component {

  constructor() {
    super();
    this.searchCallback = this.searchCallback.bind(this);
    this.purchaseCallback = this.purchaseCallback.bind(this);
    this.state = {stocksList: [], stock: ''};
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
    this.setState({stock: stock});
  }

  purchaseCallback(stocksList) {
    this.setState({stocksList: stocksList});
  }

  render() {
    return (
        <div>
          <SearchBar searchCallback={this.searchCallback}/>
          {this.state.stock ? <StockInfo purchaseCallback={this.purchaseCallback}
            stock={this.state.stock}/> : null }
          <StocksList stocks={this.state.stocksList} />
        </div>
    )
  }
}
