import React, { Component } from 'react'
import styles from './Person.module.css'

// 1. when the page re-renders/renders the handleDelete is executed
// 2. the IIFE sets up a reference, then stopped because of a missing event parameter
// 3. manually invoked via the click event
// 4. pass params to the callback.
// refer to this: https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/3578426

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('Person.js inside constructor', props)
  }

  componentWillMount() {
    console.log('Person.js inside componentWillMount()')
  }

  componentDidMount() {
    console.log('Person.js inside componentDidMount()')
  }

  render () {
    console.log('Person.js inside render()')
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}> my name is: {this.props.name}, age is: {this.props.age}</p>
        <p>{this.props.children}</p>
        <input onChange={this.props.changed} value={this.props.name} type="text" />
      </div>
    )
  }
}

export default Person