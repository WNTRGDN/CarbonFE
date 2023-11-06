import React, { FC } from 'react'
import { IBreadcrumb } from 'WNTR/interfaces'
import { Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Footer: FC<IFooter> = (footer) => {
    return (
        <Col xs={12} lg={{ span: 9, offset: 3 }} xxl={{ span: 10, offset: 2 }} as="footer">
            <Row>
              <Col className="px-0">
                <ul className="left">
                  {footer.breadcrumbs.map(breadcrumb => 
                    <li><Link href={breadcrumb.url}>{breadcrumb.title}</Link></li>
                  )}
                </ul>
              </Col>
              <Col className="px-0">
                <ul className="right">
                    <li>ABN 99 669 070 384</li>
                    <li>&copy; {footer.name} Pty Ltd</li>
                </ul>
              </Col>
            </Row>
          </Col>
    )
}

interface IFooter {
  name: string,
  breadcrumbs: IBreadcrumb[]
}

export default Footer