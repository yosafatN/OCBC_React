import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PropTypes from 'prop-types'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      title: 'Session19 Reach JS',
      scope: {
        founder: 'Founder',
        year: 2021
      }
    }
  }

  setTitle = (e) => {
    console.log(e);
    this.setState({
      title: 'test'
    })
  }

  getScope() {
    return this.state.scope
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            {this.state.title}
          </h2>
          <button onClick={this.setTitle}>
            Change Title
          </button>
          <p>
            {this.getScope().founder} | {this.getScope().year}
          </p>
          <p>Score: {this.props.score}</p>
        </header>
      </div>
    )
  }
}

App.propTypes = {
  score: PropTypes.string
}

export default App