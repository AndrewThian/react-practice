import React, { PureComponent } from 'react'

import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props)
    console.log( 'Persons.js inside constructor', props )
  }

  componentWillMount() {
    console.log( 'Persons.js inside componentWillMount()' )
  }

  componentDidMount() {
    console.log( 'Persons.js inside componentDidMount()' )
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps)
  }

  // if we have shallow checks(object referencing type) for 
  // re-rendering our components via shouldComponentUpdate(), 
  // we can use PureComponnets from the react library
  // ----------------------------------------------
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   // check if next incoming props is !equal to this current props
  //   // use case: if we only depend on a single props to update the component/container
  //   return nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    // can call side effects
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()')
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