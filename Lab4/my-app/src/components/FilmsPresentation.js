import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
export default function FilmsPresentation({ films }) {
    const [film, setPlayer] = useState([])
    return (
        <Container >
            <Row>
                {films.map((film, index) => {
                    return (
                        <Col s={12} m={6} l={4} key={index}>
                            <Card
                                header={<CardTitle image={film.img} />}
                                actions={[
                                    <Link to={`/detail/${film.id}`} key={index}>
                                        <Icon right>more_vert</Icon>Detail
                                    </Link>
                                ]}
                            >
                                <p>{film.title}</p>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}