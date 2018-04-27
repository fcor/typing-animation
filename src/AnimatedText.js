import React, { Component } from 'react'
import Typist from 'react-typist'

class AnimatedText extends Component {
  constructor(props){
    super(props)
    this.state={
      typing: true
    }
    this.done = this.done.bind(this)
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }

  render() {
    return(
      <div className="text-box">
        <span className="baseText">We play with&nbsp;</span>
        {this.state.typing &&
          <Typist  onTypingDone={this.done} cursor={{show: true, blink: true}} className="typed">
            code <span className="and">and</span> pixels<Typist.Backspace count={16} delay={1000} />
            pixels <span className="and">and</span> code<Typist.Backspace count={16} delay={1000} />
          </Typist>
        }
      </div>
    )
  }
}

export default AnimatedText
