import React, { Component } from 'react'
import Igrica from './components/Igrica.js'
import Highscore from './components/Highscore.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highscore: 100,
      zamisljeniBroj: 50,
    };
  }

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <Igrica/>
        <Highscore highscore={this.state.highscore} />
      </div>
    )
  }
}
