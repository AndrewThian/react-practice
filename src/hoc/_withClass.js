// HOC component wrapper
import React, { Component } from 'react'

// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       {/* using the spread operator to pass on the props to the WrappedComponent */}
//       <WrappedComponent {...props} />
//     </div>
//   )
// }

const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          {/* using the spread operator to pass on the props to the WrappedComponent */}
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withClass