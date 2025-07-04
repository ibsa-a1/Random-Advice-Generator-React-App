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
        <div className='app'>
          <div className='card'>
            <h1 className='heading'>{advice}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default App
