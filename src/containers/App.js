import React, { Component } from 'react'

import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
import styles from './App.module.css'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('App.js inside constructor', props)
    this.state = {
      persons: [
        { name: 'testing123', age: 12, id: 1 },
        { name: 'testing431', age: 22, id: 2 },
        { name: 'testing231', age: 14, id: 3 }
      ],
      displayPersons: false
    }
      
  }

  componentWillMount() {
    console.log('App.js inside componentWillMount()')
  }

  componentDidMount() {
    console.log('App.js inside componentDidMount()')
  }


  // new syntax
  // state = {
  //   persons: [
  //     { name: 'testing123', age: 12, id: 1 },
  //     { name: 'testing431', age: 22, id: 2 },
  //     { name: 'testing231', age: 14, id: 3 }
  //   ],
  //   displayPersons: false
  // }

  // flaw of this is that state is now mutable
  // deletePersonHandler = event => {
  //   return personIndex => {
  //     const persons = this.state.persons
  //     persons.splice(personIndex, 1)
  //     this.setState({ persons: persons })
  //   }
  // }

  // always copy a new set of state
  // return personIndex function to event when it's called
  deletePersonHandler = ( personIndex ) => {
    // slice returns a new array
    // const persons = this.state.persons.slice()
    // es6 new syntax spread operator copys and returns a new array
    const persons = [...this.state.persons]
    // immutable fashion of setting state
    persons.splice( personIndex, 1 )
    this.setState( { persons: persons } )
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }
    const persons = [...this.state.persons]
    person.name = event.target.value
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.displayPersons
    this.setState({ displayPersons: !showPersons })
  }

  render() {
    console.log('App.js inside render()')
    let persons = null
    
    if (this.state.displayPersons) {
      persons = (
        <div>
          <Persons
          key={this.state.persons}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
        </div>
      )
    }

    return (
      <div className={styles.App}>
        <Cockpit 
        title={this.props.title}
        persons={this.state.persons}
        displayPersons={this.state.displayPersons}
        clicked={this.togglePersonsHandler}/>
        {/* conditionals only with ternary conditionals */}
        {persons}
      </div>
    )
  }
}

export default App