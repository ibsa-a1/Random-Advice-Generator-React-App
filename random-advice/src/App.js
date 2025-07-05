import './App.css';
import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  state = { advice: ' ',
    loading: true
  }

  fetchadvice = () => {
    this.setState({ loading: true }); // Step 1: Start loading
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const {advice} = response.data.slip
      this.setState({advice: advice, loading: false})
    })
    .catch((error) => {
      console.log(error)
      this.setState({loading: false})
    })
  }
  componentDidMount(){
    this.fetchadvice()
  }

  render() {
    const {advice, loading} = this.state
    return (
      <div>
        <div className='app'>
          <div className='card'>
            {loading ? <p className='loading'>💡 Loading advice...</p> : <h1 className='heading'>{advice}</h1>}
            {console.log("loading:", loading)}
            <button className='button' onClick={this.fetchadvice}> 
              <span>Give me advice</span> 
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
