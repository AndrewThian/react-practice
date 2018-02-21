import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props)
    console.log('Persons.js inside constructor', props)
  }

  componentWillMount() {
    console.log('Persons.js inside componentWillMount()')
  }

  componentDidMount() {
    console.log('Persons.js inside componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log( '[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps );
  }

  render () {
    console.log('Persons.js inside render()')
    return this.props.persons.map(( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id} 
        changed={e => this.props.changed( e, person.id )}/>
    })
  }
}

export default Persons