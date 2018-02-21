import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {

  state = {
    persons: [
      { name: 'testing123', age: 12, id: 1 },
      { name: 'testing431', age: 22, id: 2 },
      { name: 'testing231', age: 14, id: 3 }
    ],
    displayPersons: false
  }

  
  togglePersonsHandler = () => {
    const showPersons = this.state.displayPersons
    this.setState({
      displayPersons: !showPersons
    })
  }

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
  deletePersonHandler = personIndex => event => {
    // slice returns a new array
    // const persons = this.state.persons.slice()
    // es6 new syntax spread operator copys and returns a new array
    const persons = [...this.state.persons]
    // immutable fashion of setting state
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
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

  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white'
    }

    let persons = null

    if (this.state.displayPersons) {
      style.backgroundColor = 'green'
      persons = (
        <div>
          {this.state.persons.map((person, ind) => {
            return <Person
              personIndex={ind}
              click={this.deletePersonHandler}
              changed={e => this.nameChangeHandler(e, person.id)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      )
    }
    
    let classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red')
    } 

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className='App'>
        <p className={classes.join(' ')}>test dynamic class change</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Click me to toggle Persons
        </button>
        {/* conditionals only with ternary conditionals */}
        {persons}
      </div>
    )
  }
}

export default App