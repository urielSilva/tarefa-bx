class App extends React.Component {

  constructor() {
    super();
    this.searchCallback = this.searchCallback.bind(this);
    this.state = {stocksList: [], stock: ''};
  }

  componentWillMount() {
    $.ajax({
      url: '/stocks',
      type: 'get',
      success: (response) => {
        console.log(response);
        this.setState({stocksList: response});
      }
    })
  }

  searchCallback(response) {
    console.log(response);
    this.setState({stock: response});
  }
  render() {
    return (
        <div>
          <SearchBar searchCallback={this.searchCallback}/>
          {this.state.stock ? <StockInfo stock={this.state.stock}/> : null }
          <StocksList stocks={this.state.stocksList} />
        </div>
    )
  }
}
