import { Link } from 'react-router-dom'
import { Container,Row,Col,Card,Button } from 'react-materialize'
export default function FilmsPresentation({ films }) {
    console.log(films);
    return (
        <div>
            <Container>
                <Row >
                    {films.map((film) =>
                    (<Col s={12} m={6} l={4}  >
                        <Card>
                            <img className='img_home' src={film.img} />
                            <h3 className='Title'>{film.title}</h3>
                            <p className='Subt'>year : {film.year}</p>
                            <p className='Subt'>nation :{film.nation}</p>
                            <Link to={`detail/${film.id}`}>
                                <p className='button1'><Button>detail</Button></p>
                            </Link>
                        </Card>
                    </Col>))}
                </Row>
            </Container>

        </div>

    )
}