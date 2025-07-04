import './App.css';
import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  state = { advice: ' '}

  fetchadvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip
      this.setState({advice: advice})
    })
    .catch((error) => {
      console.log(error)
    })
  }
  componentDidMount(){
    this.fetchadvice()
  }

  render() {
    const {advice} = this.state
    return (
      <div>
        <h1>{advice}</h1>
      </div>
    )
  }
}

export default App
