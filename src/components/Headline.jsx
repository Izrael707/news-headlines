import React from 'react'

export const Headline = ({newsArray}) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
      {
        newsArray.map((element, index) => {
          return (
            <div className="col" key={index}>
              <div className="card text-bg-dark">
                <img src={element.image_url} className='card-img-top' style={{height: '300px'}} alt={element.source} />
                <div className="card-body">
                  <h5 className="card-title">
                    {element.title}
                  </h5>
                  <p className="card-text">
                    {element.description}
                  </p>
                  <a className="card-text" href={element.url}>Read more</a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
