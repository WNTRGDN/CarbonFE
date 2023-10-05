import React, { FC } from 'react'
import { Block } from 'WNTR/structures'
import { IPage } from 'WNTR/interfaces'
import { Col } from 'react-bootstrap'

const Main: FC<IPage> = (page) => {
    return (
        <Col xs={12} lg={9} xxl={10} as="main" className="px-0">
            {page.blocks.length ? page.blocks.sort((a,b) => { return a.order - b.order }).map((block, index) => <Block key={index} {...block} />) : null}
        </Col>
    )
}

export default Main