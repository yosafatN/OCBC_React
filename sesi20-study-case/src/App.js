import './App.css';
import React from 'react'
import AppFunction from './components/AppFunctional';
import clock from './clock.svg'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  tict() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tict()
      const sec = (360 * (this.state.date.getSeconds()/60))
      document.getElementById("clock").style.transform = "rotate("+sec+"deg)"
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img id="clock" src={clock} className="App-logo" alt="logo" />

          <h1>Realtime Clock Class</h1>
          <h1>{this.state.date.toLocaleTimeString()}</h1>

          <AppFunction></AppFunction>
        </header>
      </div>
    );
  }
}

export default App;
