import React, { FC } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Cards: FC<ICards> = (cards) => {
    return (
        <article className={cards.alias}>
            <Container>
                <Row>
                    {cards.heading ?
                        <Col xs={12}>
                            <h2 className={`${cards.alias}__heading`}>
                                {cards.heading}
                            </h2>
                        </Col>
                    : null }
                    {cards.items.map((item, index) =>
                        <Col xs={6} md={4} key={index}>
                            {item.link ?
                                <Link className={`${cards.alias}__card`} href={item.link}>
                                    <h3 className={`${cards.alias}__title`}>{item.title}<span>{item.text}</span></h3>
                                    <Image className={`${cards.alias}__image`} src={`${item.image}?mode=crop&width=500&height=500`} />
                                </Link> :
                                <div className={`${cards.alias}__card`}>
                                    <h3 className={`${cards.alias}__title`}>{item.title}<span>{item.text}</span></h3>
                                    <Image className={`${cards.alias}__image`} src={`${item.image}?mode=crop&width=500&height=500`} />
                                </div>
                            }
                        </Col>
                    )}
                </Row>
            </Container>
        </article>
    )
}

interface ICards {
    heading: string;
    items: ICard[];
    type: string;
    alias: string;
}

interface ICard {
    image: string;
    link: string;
    text: string;
    title: string;
}

export default Cards