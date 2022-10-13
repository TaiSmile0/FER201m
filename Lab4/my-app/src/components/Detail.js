import React from 'react'
import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms'
import { Card, Container, Icon } from 'react-materialize'
import { useState } from 'react'
import ModalCase from './ModelCase';
export default function Detail() {
  const filmName = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const film = Films.find(obj => {
    return obj.id == filmName.id;
  });
  return (
    <div className='Details_page'>
      <Container>
      {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
        <Card>
          <Card>
            <img src={`../${film.img}`} alt='' />
            <div className='DTitle'>{film.title}</div>
          <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
            <Icon >ondemand_video</Icon>
          </a>
          </Card>

          <Card className='card-panel teal lighten-2'>
            <p>{film.detail}</p>
            <p>Nation :{film.nation}</p>
            <p>Year :{film.year}</p>
            <p>Info :{film.info}</p>
          </Card>
        </Card>
      </Container>
    </div>
  )

}