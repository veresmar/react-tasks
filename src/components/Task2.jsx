import React from 'react'

function Task2 () {
  const data = {
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/440px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
         cardTitle: "Bob Dylan",
         cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
         button: {
           url: "https://en.wikipedia.org/wiki/Bob_Dylan",
           label: "Go to wikipedia"
         }
       }
    return (
      <div className="card" style={{width: '18rem'}}>
      <img src={data.image} className="card-img-top" alt={data.cardTitle} />
      <div className="card-body">
        <h5 className="card-title">{data.cardTitle}</h5>
        <p className="card-text">{data.cardDescription}</p>
        <a href={data.button.url} className="btn btn-primary">{data.button.label}</a>
      </div>
    </div>
    )
}

export default Task2
