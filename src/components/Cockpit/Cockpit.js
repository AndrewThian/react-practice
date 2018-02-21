import React from 'react'
import styles from './Cockpit.module.css'

const cockpit = props => {
  let btnClass = ''
  const assignedClasses = []

  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red)
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold)
  }

  if (props.displayPersons) {
    btnClass = styles.Red
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>test dynamic class change</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Click me to toggle Persons
      </button>
    </div>
  )
}

export default cockpit