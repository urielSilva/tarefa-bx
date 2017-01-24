class App extends React.Component {

  constructor() {
    super();
    this.searchCallback = this.searchCallback.bind(this);
    this.state = {stock: ''};
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
          <StocksList />
        </div>
    )
  }
}
