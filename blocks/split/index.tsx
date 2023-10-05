import React, { FC } from 'react'
import { IBlock } from "WNTR/interfaces"
import { Block } from 'WNTR/structures'
import { Row, Col } from 'react-bootstrap'

const Split: FC<ISplit> = (split) => {
    return (
        <article className={split.alias}>
            <Row>
                {split.blocks.length ? split.blocks.map((block, index) => <Col key={index} xs={12} md={6} className={`${split.alias}__col d-flex`}><Block {...block} /></Col>) : null}
            </Row>
        </article>
    )
}

interface ISplit {
    blocks: IBlock[];
    type: string;
    alias: string;
}

export default Split