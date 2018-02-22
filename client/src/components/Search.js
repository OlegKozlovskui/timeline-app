import React, {Component} from 'react';

class Search extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    this.props.userName(this.input.value);
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.submitHandler}>
        <input className="form-control mr-sm-2" type="text" placeholder="Type user name..."
               ref={(input) => this.input = input}/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
