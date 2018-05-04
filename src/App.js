import React, { Component } from 'react'
import './App.css'
import AnimatedText from './AnimatedText'
import Killpop from './Killpop'
import ScrollButton from './ScrollButton'
import Particles from 'react-particles-js'
import params from './particles.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Particles params={params}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }} />
        <div className="content">
          <Killpop />
          <AnimatedText />
        </div>
        <ScrollButton />
      </div>
    );
  }
}

export default App;
