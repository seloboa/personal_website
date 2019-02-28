import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="container">
        <div class="left-half left-textWrapper">
          <div class="mainText">
            <p id="name" class="fadeinanimated">
              Bao Nguyen
            </p>
            <p id="title" class="fadeinanimated">
              Digital Marketer | Developer
            </p>
            <p id="location" class="fadeinanimated">
              New York City
            </p>
          </div>
        </div>
        <div class="right-half right-textWrapper">
          <div class="mainText">
            <p id="name" class="fadeinanimated">
              Welcome to my personal website
            </p>
            <p id="title" class="fadeinanimated">
              Click on the down arrow for more
            </p>
            <p id="location" class="fadeinanimated">
              Go on, be curious!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
