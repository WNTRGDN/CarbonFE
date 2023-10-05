import React, { FC } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { IWebsite } from 'WNTR/interfaces'
import { Col, Offcanvas, Nav } from 'react-bootstrap'

const Sidebar: FC<IWebsite> = (sidebar) => {
    
    const [show, setShow] = useState(true)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Col xs={12} sm={3} lg={3} xl={2} as="menu">
            <Offcanvas show={show} onHide={handleClose} responsive="md" className="w-100">
                <Offcanvas.Header closeButton>
                    <img src={sidebar.settings.logo} alt="Carbon Fire Engineering" className="w-25 d-block mx-auto" />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="w-100 h-100">
                        <img src={sidebar.settings.logo} alt="Carbon Fire Engineering" className="branding d-none d-lg-block mx-auto w-25 mt-3 mb-5" />
                        <Nav as="nav" defaultActiveKey="/home" className="flex-column">
                            {sidebar.menus[0]?.includeHome ? 
                                <Nav.Link as={Link} key="/home" href="/" className="text-end text-uppercase pe-5">
                                    <img src="../logo_title.png" className="home-logo" />
                                </Nav.Link> : null}
                            {sidebar.menus[0]?.links.map((link, index) => <Nav.Link as={Link} key={index} href={link.url} className="text-end align-bottom fc-primary ls-1 text-uppercase pe-5">{link.title}</Nav.Link>)}
                        </Nav>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Col>
    )
}

export default Sidebar