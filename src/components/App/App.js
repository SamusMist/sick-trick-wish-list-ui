import React, { Component } from 'react';
import './App.css';
import fetchApi from '../../apiCalls.js'
import Trick from '../Trick/Trick.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      trickInfo: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetchApi.getData('http://localhost:3001/api/v1/tricks')
      .then(data => this.setState({ trickinfo: data }))
      .catch((error) => {
        this.setState({error: error})
      })
  }

  render() {
    return this.state.trickInfo? (
      <>
        <div className="App">
          <h1>Sick Trick Wish List</h1>
        </div>
        <Trick trickInfo={ this.state.trickInfo } />
      </>
    ) : (
      <div>
        Loading...
      </div>
    )
  }
}

export default App;
