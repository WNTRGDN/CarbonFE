import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Jumbotron: FC<IJumbotron> = (jumbotron) => {
    return (
        <article className={jumbotron.alias} style={jumbotron.image.length ? { backgroundImage:`url(${jumbotron.image.replace("https://wntrau-001-site1.qtempurl.com", "")})` } : {}}>
            <div className={`${jumbotron.alias}__inner`}>
                <Container>
                    <Row>
                        <Col dangerouslySetInnerHTML={{ __html: jumbotron.richtext }}></Col>
                    </Row>
                </Container>
            </div>
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