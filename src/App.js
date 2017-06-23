import React, { Component } from 'react'
import { getAstronauts } from './api'
import Astronaut from './Astronaut'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      error: null,
      people: []
    }
  }

  componentWillMount() {
    getAstronauts()
      .then(result => this.setState({ ...this.state, ...result, loaded: true }))
      .catch(error =>
        this.setState({ ...this.state, error: true, loaded: true })
      )
  }

  render() {
    const { loaded, error, people, number } = this.state
    return (
      <div className="App">
        <h1>How many People are in Space?</h1>
        {!loaded && <span>loading...</span>}
        {error && <span>Oops! The telescope broke!</span>}
        {loaded &&
          !error &&
          <div>
            <span className="stat">{number}</span>
            <ul>
              {people.map(astronaut => (
                <Astronaut key={astronaut.name} {...astronaut} />
              ))}
            </ul>
          </div>}
      </div>
    )
  }
}

export default App
