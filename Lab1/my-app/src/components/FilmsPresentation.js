import React from 'react'
export default function Films({films}) {
    return (
        <div className='container'>
            {films.map((film) => (
            <div className='column'>
            <div className='card'>
            <img src={film.img}/>
            <h3>{film.title}</h3>
                <p className="title">{film.year}</p>
                <p className="title">{film.nation}</p>
            </div>
          </div>
         ))}</div>   
      );
    }
    