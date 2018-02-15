import React from 'react'

export const Person = (props) => {
	return (
		<div>
			<hr/>
			<p>my name is: {props.name}, age is: {props.age}</p>
			<hr/>
		</div>
	)
}