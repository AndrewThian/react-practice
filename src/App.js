import React, { Component } from 'react'
import { Person } from './Person/Person'
import './App.css'

class App extends Component {

  state = {
    persons: [
      { name: 'testing123', age: 12 },
      { name: 'testing431', age: 22 },
      { name: 'testing231', age: 14 }
    ],
    displayPersons: false
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.displayPersons
    this.setState({
      displayPersons: !showPersons
    })
  }

  render() {
    return (
      <div className='App'>
        <button
        onClick={this.togglePersonsHandler}>
          Click me to toggle Persons
        </button>
        {/* conditionals only with ternary conditionals */}
        { this.state.displayPersons ? 
          <div>
            <Person></Person>
            <Person></Person>
            <Person></Person>
          </div> : null
        }
      </div>
    )
  }
}

export default App