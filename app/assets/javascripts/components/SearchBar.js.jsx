
class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {code: ''};
    this.fetchStock = this.fetchStock.bind(this);
    this.setCode = this.setCode.bind(this);
  }

  fetchStock(event)  {
    $.ajax({
      url: `/stocks/${this.state.code}`,
      type: 'get',
      success: (response) => {
        console.log(response);
      }
    });
  }

  setCode(event) {
    this.setState({code: event.target.value});
  }

  render() {
    return (
      <div className="search-bar">
        <div className="ui right labeled icon input">
          <div className="ui label">
            <i className="help icon" style={{"marginRight": "0"}}/>
          </div>
          <input type="text" value={this.state.code} onChange={this.setCode}
          placeholder="Stock Code" />
          <div className="ui basic label" onClick={this.fetchStock}>Quote</div>
        </div>
      </div>
    );
  }
}
