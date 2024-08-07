import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumGenerate = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="count-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.randomNumGenerate}
            className="btn"
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
