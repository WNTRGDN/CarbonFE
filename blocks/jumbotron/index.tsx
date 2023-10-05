import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Jumbotron: FC<IJumbotron> = (jumbotron) => {
    return (
        <article className={jumbotron.alias} style={jumbotron.image.length ? { backgroundImage:`url(${jumbotron.image})` } : {}}>
            <Container>
                <Row>
                    <Col dangerouslySetInnerHTML={{ __html: jumbotron.richtext }}></Col>
                </Row>
            </Container>
        </article>
    )
}

interface IJumbotron {
    image: string;
    richtext: string;
    type: string;
    alias: string;
}

export default Jumbotron