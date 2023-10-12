import React, { FC } from 'react'
import { IWebsite } from 'WNTR/interfaces'
import { Row, Col } from 'react-bootstrap'

const Footer: FC<IWebsite> = (footer) => {
    return (
        <Col xs={12} lg={{ span: 9, offset: 3 }} xxl={{ span: 10, offset: 2 }} as="footer">
            <Row>
              <Col className="px-0">

              </Col>
              <Col className="px-0">
                <ul>
                    <li>ABN 99 669 070 384</li>
                    <li><strong>&copy; {footer.name} Pty Ltd</strong></li>
                </ul>
              </Col>
            </Row>
          </Col>
    )
}

export default Footer