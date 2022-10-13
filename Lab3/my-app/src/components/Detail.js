import React from 'react'
import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms.js'
export default function Detail(){
  const filmName = useParams();
  const film = Films.find(obj => {
    return obj.id == filmName.id;
  });
   return(
    <div className='container'>
     <div className='product-card'>
    	<div className='product-tumb'>
    		<img src={`../${film.img}`} alt=''/>
    	</div>
        <div className='badge'>{film.title}</div>
    	<div className='product-details'>
      		<p>{film.detail}</p>
            <p>Nation :{film.nation}</p>
            <p>Year :{film.year}</p>
            <p>Info :{film.info}</p>
    	</div>
  </div>
</div>
   )

}