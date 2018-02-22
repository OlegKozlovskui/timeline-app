import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Search from '../components/Search';
import TwitterTimeline from '../components/TwitterTimeline';

class App extends Component {
  state = {
    userName: ''
  };

  onSearch = (userName) => {
    this.setState({userName})
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <br/>
          <Search userName={this.onSearch}/>
          <TwitterTimeline userName={this.state.userName} />
        </div>
      </div>
    );
  }
}

export default App;
