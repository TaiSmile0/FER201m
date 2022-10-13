import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function FilmsPresentation({ films }) {
    const [film, setPlayer] = useState([])
    return (
        <div className='container'>
            {films.map((film) => (
                <div className='column'>
                    <div className='card'>
                    <Link to={`Detail/${film.id}`}>
                        <img src={film.img} />
                    </Link>
                        <h3>{film.title}</h3>
                        <p className='Year'>{film.year}</p>
                        <p className='Nation'>{film.nation}</p>
                        <button onClick={() => { setPlayer(film) }}>
                            <a href='#popup1' id='openPopUp'>Detail</a>
                        </button>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={film.img} />
                    <h2>{film.name}</h2>
                    <a className='close' href='#/'>&times;</a>
                    <div className='content'>
                        {film.info}
                    </div>
                </div>
            </div>

        </div>

    )
}