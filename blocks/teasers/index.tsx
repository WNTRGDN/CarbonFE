import React, { FC } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Teasers: FC<ITeasers> = (teasers) => {
    console.log(teasers.pages)
    return (
        <article className={teasers.alias}>
            <Container>
                <Row>
                    {teasers.heading ?
                        <Col xs={12}>
                            <h2 className={`${teasers.alias}__heading`}>
                                {teasers.heading}
                            </h2>
                        </Col>
                    : null }
                    {teasers.pages.sort((a,b) => { return a.order - b.order }).map((item, index) =>
                        <Col xs={12} sm={6} key={index}>
                            {item.link ?
                                <Row>
                                    <Col xs={12} xl={6}>
                                        <Link className={`${teasers.alias}__link-image`} href={item.link}>
                                            <Image className={`${teasers.alias}__image`} src={`${item.image}?mode=crop&width=500&height=500`} />
                                        </Link>
                                    </Col>
                                    <Col xs={12} xl={6}>
                                        <Link className={`${teasers.alias}__link-title`} href={item.link}>
                                            <h3 className={`${teasers.alias}__title`}>{item.title}</h3>
                                        </Link>
                                        <div className={`${teasers.alias}__text`} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                                    </Col>
                                </Row>
                                 :
                                <Row>
                                    <Image className={`${teasers.alias}__image`} src={`${item.image}?mode=crop&width=500&height=500`} />
                                    <h3 className={`${teasers.alias}__title`}>{item.title}</h3>
                                    <div className={`${teasers.alias}__text`} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                                </Row>
                            }
                        </Col>
                    )}
                </Row>
            </Container>
        </article>
    )
}

interface ITeasers {
    heading: string;
    pages: ITeaser[];
    type: string;
    alias: string;
}

interface ITeaser {
    image: string;
    link: string;
    text: string;
    title: string;
    order: number;
}

export default Teasers