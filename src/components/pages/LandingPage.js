import React from 'react'
import robot from '../../assets/images/robot.svg'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import startimg from '../../assets/images/startimg.png'
import startimage from '../../assets/images/startimage.png'
import productimg from '../../assets/images/productimg.png'
import intro from '../../assets/images/intro.png'
import succeess from '../../assets/images/succeess.png'
import value from '../../assets/images/value.png'
import social from '../../assets/images/social.png'
import benefit from '../../assets/images/benefit.png'
import footerimg from '../../assets/images/footerimg.png'
import practice from '../../assets/images/practice.png'
import offers from '../../assets/images/offers.png'
import articulation from '../../assets/images/articulation.png'
import start from '../../assets/images/start.png'
import './landing.css'
export default function LandingPage() {
    return (
        <div className='m-3'>

            <Container fluid className="ms-3 me-3 landing-text">
                <Row className="no-gutters">
                    <Col xs={12} lg={7} className="image-col">
                        <Image variant="top" fluid src={startimage} />
                         <Image  src={social} className='ms-5 socialimg1'  fluid variant="top"/>
                    </Col>
                    <Col xs={12} lg={5} className="text-col">
                        <Image variant="top" className='introimg' fluid src={robot} />
                    </Col>
                </Row>

            </Container>
            <Container fluid className='ms-3 me-3 landing-text'>
                <Row className="no-gutters ms-2">
                    <Col xs={12} lg={7} className="image-col ">
                        <Image variant="top" fluid src={productimg} />

                    </Col>
                    <Col xs={12} lg={5} className="text-col">
                        <Image variant="top" className='introimg' fluid src={intro} />

                    </Col>
                </Row>

            </Container>
            <Container fluid className='ms-3 me-3 landing-text'>
                <Row className="no-gutters ms-2">
                    <Col xs={12} lg={6} className="image-col ">
                        <Image variant="top" className='benefitimg' src={benefit} />

                    </Col>
                    <Col xs={12} lg={6} className="text-col">

                    </Col>
                </Row>

            </Container>
            <Container fluid className='ms-3 me-3 landing-text'>
                <Row className="no-gutters ms-2">
                    <Col xs={12} lg={6} className="image-col ">
                        <Image variant="top" fluid src={practice} />
                    </Col>
                    <Col xs={12} lg={6} className="image-col imagemargin">
                        <Image variant="top" fluid src={offers} />

                    </Col>
                </Row>

            </Container>

            <Container fluid className='ms-3 me-3 landing-text'>
                <Row className="no-gutters ms-2">
                    <Col xs={12} lg={6} className="image-col ">
                        <Image variant="top" fluid src={offers} />
                    </Col>
                    <Col xs={12} lg={6} className="image-col">

                    </Col>
                </Row>

            </Container>

            <Container fluid className='landing-text'>
                <Row>
                    <Col lg={12} className='footercss mt-5 mb-3'>
                        <Image variant="top" fluid src={footerimg} />
                    </Col>
                </Row>

            </Container>


        </div>
    )
}
