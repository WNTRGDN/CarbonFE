import React, { FC } from 'react'

const Image: FC<IImage> = (image) => {
    return (
        <article className={image.alias}>
            <img className={`${image.alias}__image`} src={`${image.src.replace("https://wntrau-001-site1.qtempurl.com", "")}`} />
        </article>
    )
}

interface IImage {
    src: string;
    type: string;
    alias: string;
}

export default Image