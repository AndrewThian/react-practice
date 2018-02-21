import React, { PureComponent, Fragment } from 'react'

import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'
// import WithClass from '../hoc/WithClass'
import styles from './App.module.css'
import withClass from '../hoc/_withClass'

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('App.js inside constructor', props)
    this.state = {
      persons: [
        { name: 'andrew', age: 12, id: 1 },
        { name: 'sean', age: 22, id: 2 },
        { name: 'audrey', age: 14, id: 3 }
      ],
      showPersons: false
    }
      
  }

  componentWillMount() {
    console.log('App.js inside componentWillMount()')
  }

  componentDidMount() {
    console.log('App.js inside componentDidMount()')
  }

  // if we have shallow checks(object referencing type) for 
  // re-rendering our components via shouldComponentUpdate(), 
  // we can use PureComponnets from the react library
  // ----------------------------------------------
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   // check if next incoming props is !equal to this current props
  //   // use case: if we only depend on a single props to update the component/container
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }


  // new syntax
  // state = {
  //   persons: [
  //     { name: 'testing123', age: 12, id: 1 },
  //     { name: 'testing431', age: 22, id: 2 },
  //     { name: 'testing231', age: 14, id: 3 }
  //   ],
  //   showPersons: false
  // }

  // flaw of this is that state is now mutable
  // deletePersonHandler = event => {
  //   return personIndex => {
  //     const persons = this.state.persons
  //     persons.splice(personIndex, 1)
  //     this.setState({ persons: persons })
  //   }
  // }

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

  // always copy a new set of state
  // return personIndex function to event when it's called
  deletePersonHandler = ( personIndex ) => {
    // slice returns a new array
    // const persons = this.state.persons.slice()
    // es6 new syntax spread operator copys and returns a new array
    const persons = [...this.state.persons]
    // immutable fashion of setting state
    persons.splice( personIndex, 1)
    this.setState( { persons: persons } )
  }
 
  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons
    this.setState({ showPersons: !showPersons })
  }

  render() {
    console.log('App.js inside render()')
    let persons = null
    
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
          // if you provide a key into the child components, componentWillRecieveProps will not be called
          // key={this.state.persons}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>
        </div>
      )
    }

    return (
      <Fragment>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show persons</button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {/* conditionals only with ternary conditionals */}
        {persons}
      </Fragment>
    )
  }
}

export default withClass(App, styles.App)