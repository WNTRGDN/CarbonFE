import React, { FC } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Image: FC<IImage> = (image) => {
    return (
        <article className={image.alias}>
            <img className={`${image.alias}__image`} src={`${image.src}`} />
        </article>
    )
}

interface IImage {
    src: string;
    type: string;
    alias: string;
}

export default Image