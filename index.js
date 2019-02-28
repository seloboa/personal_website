import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="backgroundWrapper">
        <div class="textWrapper">
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
      </div>
    );
  }
}
