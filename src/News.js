import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

function News(props) {
  let [item, setitem] = useState([])
  useEffect(() => {
    let result = axios.get(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=1f4d80d92d3447e5aed6bdbaac6f9be0`)
    // console.log(result);
    result.then((res) => {
      // console.log(res.data.articles);
      setitem(res.data.articles)
    })
  }, [props.category])


  return (
    <>
      {item ? <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
        {item.map((pro) => {
          return (
            <NewsItem
              title={pro.title}
              dec={pro.description}
              idata={pro.urlToImage}
              url={pro.url}

            />
          )
        })}
      </div> : <p>No data</p>}
    </>
  )
}

export default News
