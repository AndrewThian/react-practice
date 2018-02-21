import React, { Fragment } from 'react'
import styles from './Cockpit.module.css'

const cockpit = props => {
  const assignedClasses = []
  let btnClass = styles.Button

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red)
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold)
  }

  if (props.showPersons) {
    btnClass = [styles.Button, styles.Red].join(' ')
  }

  return (
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>test dynamic class change</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Click me to toggle Persons
      </button>
    </Fragment>
  )
}

export default cockpit