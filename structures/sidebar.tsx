import React, { FC } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { IWebsite } from 'WNTR/interfaces'
import { Col, Offcanvas, Nav } from 'react-bootstrap'

const Sidebar: FC<IWebsite> = (sidebar) => {
    
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col xs={12} md={2} as="menu" className="p-0 align-items-center d-flex position-relative">
            <Offcanvas show={show} onHide={handleClose} responsive="md" className="w-100">
                <Offcanvas.Header closeButton>
                    <img src={sidebar.settings.logo} alt="Carbon Fire Engineering" className="w-25 d-block mx-auto" />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="w-100">
                        <img src={sidebar.settings.logo} alt="Carbon Fire Engineering" className="w-50 d-none d-md-block mx-auto my-4 position-absolute top-0 start-50 translate-middle mt-5 pt-5" />
                        <Nav defaultActiveKey="/home" className="flex-column my-auto">
                            {sidebar.menus[0].links.map((link, index) => <Nav.Link as={Link} key={index} href={link.url} className="text-end text-uppercase pe-5 fw-lighter">{link.title}</Nav.Link>)}
                        </Nav>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Col>
    )
}

export default Sidebar