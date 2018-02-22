import React, {Component} from 'react';
import axios from 'axios';

const URL = 'http://localhost:8080/timeline';

class TwitterTimeline extends Component {
  state = {
    timeline: [],
    touched: false
  };

  componentWillReceiveProps({userName}) {
    axios.get(`${URL}?userName=${userName}`)
      .then(res => {
        this.setState({
          timeline: res.data,
          touched: true
        });
      });
  }

  renderTimeline(timeline) {
    if(timeline.length) {
      return timeline.map(tweet => {
        return(
          <div className="card text-white bg-info mb-3 offcet" key={tweet.id}>
            <div className="card-header">
              {tweet.user.name}
              <img className="avatar" src={tweet.user.profile_image_url} alt={tweet.user.name}/>
            </div>
            <div className="card-body">
              <p className="card-text text-left">{tweet.text}</p>
            </div>
          </div>
        )
      })
    } else if(this.state.touched) {
      return <h3 className="text-center">Nothing found</h3>
    }
  }

  render() {
    return (
      <div className="justify-content-md-center">
        {this.renderTimeline(this.state.timeline)}
      </div>
    );
  }
}

export default TwitterTimeline;
