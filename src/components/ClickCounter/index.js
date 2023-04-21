import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onChange = () => {
    this.setState(preValue => {
      console.log(`previous state value ${preValue.count}`)
      return {count: preValue.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="spam">{count}</span>
          times
        </h1>
        <p className="para"> Click the button to increase the count!</p>
        <button className="button" onClick={this.onChange}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
