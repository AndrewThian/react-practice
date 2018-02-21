import React from 'react'
import './Person.css'

const Person = (props) => {

	const handleDelete = (event) => (params => { props.click(params)(event) })

	return (
		<div className="Person">
			<hr/>
			<p
				// 1. when the page re-renders/renders the handleDelete is executed
				// 2. the IIFE sets up a reference, then stopped because of a missing event parameter
				// 3. manually invoked via the click event
				// 4. pass params to the callback.
				// refer to this: https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/3578426
				onClick={handleDelete(props.personIndex)}>
				my name is: {props.name}, age is: {props.age}
			</p>
			<input 
				onChange={props.changed}
				value={props.name}
				type="text"/>
			<hr/>
		</div>
	)
}

export default Person