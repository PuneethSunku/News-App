// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
//     return (
//       <div className="my-3">
//         <div className="card">
//           <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
//           <span className="badge rounded-pill bg-danger">{source}</span>
//           </div>
//           <img src={imageUrl} className="card-img-top" alt="..."/>
//           <div className="card-body">
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{description}</p>
//               <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
//               <p className="card-text"><small className="text-body-secondary">By <strong>{author ? author : "Unknown"}</strong> on {new Date(date).toGMTString()}</small></p>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default NewsItem

//Function Based
import React from 'react'

const NewsItem = (props) =>{
  let {title, description, imageUrl, newsUrl, author, date, source} = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
            <p className="card-text"><small className="text-body-secondary">By <strong>{author ? author : "Unknown"}</strong> on {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
