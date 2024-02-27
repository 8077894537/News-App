import React from 'react'

function NewsItem(props) {
   
  return (
    <>
    
            <div className="col">
    <div className="card" style={{height:"auto"}}>
      <img src={props.idata} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.dec}</p>
<a href={props.url}><button className='btn btn-danger' style={{marginTop:"20px"}}>More News</button></a>
      </div>
    </div>
  </div>
    </>
  )
}

export default NewsItem
