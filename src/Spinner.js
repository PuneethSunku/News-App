// import React, { Component } from 'react'
// import spinner from './spinner.gif'

// export class Spinner extends Component {
//   render() {
//     return (
//       <div className="text-center">
//         <img className="my-3" src={spinner}  alt="loading"/>
//       </div>
//     )
//   }
// }

// export default Spinner

//Function Based
import React from 'react'
import spinner from './spinner.gif'

const Spinner = ()=> {
  return (
    <div className="text-center">
      <img className="my-3" src={spinner}  alt="loading"/>
    </div>
  )
}

export default Spinner

