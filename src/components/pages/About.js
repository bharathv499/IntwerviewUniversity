import React from 'react'
import './About.css'
import about from '../../assets/images/about.png'
import line from '../../assets/images/line.png'
import rectangle from '../../assets/images/rectangle.png'
import line2 from '../../assets/images/line2.png'
import ourproduct from '../../assets/images/ourproduct.png'
import logo1 from '../../assets/images/logo1.png'
import about1 from '../../assets/images/about1.png'
import about3 from '../../assets/images/about3.png'
import about4 from '../../assets/images/about4.png'
import journey from '../../assets/images/journey.png'
import footerimg from '../../assets/images/footerimg.png'
import aboutus from '../../assets/images/aboutus.png'
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import bluebg from '../../assets/images/bluebg.png'
import pinkbg from '../../assets/images/pinkbg.png'
export default function About() {

  const backgroundImageStyle = {
    position: 'absolute',
    top: 99,
    right: 0,
    bottom: 0,
    left: 31,
    backgroundImage: `url(${pinkbg})`,
    backgroundRepeat: 'no-repeat',
  };

  const backgroundImageStyle1 = {
    position: 'absolute',
    top: 100,
    right: 0,
    bottom: 0,
    left: 800,
    backgroundImage: `url(${bluebg})`,
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div >
      <Container fluid className="about-us-container p-5">
        <div style={{ width: '10px', height: '10px' }}>
          <div style={backgroundImageStyle}></div></div>
        {/* <div style={{ width: '10px', height: '10px' }}>
          <div style={backgroundImageStyle1}></div></div> */}
        {/* <span className='loginrow'> */}
        <Row>
          <Col xs={12} lg={4} className="image-col mb-5">
            <h2 className='abouttext'>About Us</h2>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={12} lg={4} className="image-col">
            <Image variant="top" src={about} fluid
              className="about-us-image" />
          </Col>
          <Col xs={12} lg={8} className="text-col ps-5 mt-3">
            <div className="about-us-text">
              <span className='headerAbout'> <Image variant="top" src={rectangle} fluid
                className="about-us-image " />
                <h2 className='abouttext'>OUR ORIGIN</h2></span>
              <p>
                In a world full of competition and noise, finding direction can be a challenge, especially when it comes to career development. Zunamu was born from close-to-heart experiences of our founder, himself an early-career professional at that time. Aware of the stress and unease caused by job interviews, he set out on a mission to turn this crucial career step into an opportunity rather than an obstacle. He concluded that the 'one-size-fits-all' help available was not fitting anyone particularly well. From this realization, Zunamu was born.            </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
          </Col >
          <Col xs={12} lg={8}>
            <Image variant="top" src={line} fluid
              className="about-us-image" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="about-us-container p-5">
        <Row className="no-gutters">
          <Col xs={12} lg={8} className="text-col ps-5">
            <div className="about-us-text">
              <span className='headerAbout'> <Image variant="top" src={rectangle} fluid
                className="about-us-image " />
                <h2 className='abouttext '>OUR VALUES</h2></span>
              <p>
                Zunamu works with three guiding principles: Growth, Effort, and Potential. We know that in the stage of career-building, the journey is just as important as the destination. That's why we're committed to helping you thrive on every step of your journey, dedicating our resources to support your growth, reward your efforts, and unlock your unique potential. We believe in You, and our goal is to make everyone believe in themselves.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={4} className="image-col">
            <Image variant="top" src={about3} fluid
              className="about-us-image" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={8}>
            <Image variant="top" src={line2} fluid
              className="about-us-image" />
          </Col>
          <Col xs={12} lg={4}>
          </Col >
        </Row>
      </Container>
      <Container fluid className="about-us-container p-5">
        <Row className="no-gutters">
          <Col xs={12} lg={4} className="image-col">
            <Image variant="top" src={about1} fluid
              className="about-us-image" />
          </Col>
          <Col xs={12} lg={8} className="text-col ps-5 mt-3">
            <div className="about-us-text">
              <span className='headerAbout'> <Image variant="top" src={rectangle} fluid
                className="about-us-image" />
                <h2 className='abouttext'>OUR TEAM</h2></span>
              <p>
                Our team is spearheaded by a real-life hustler – an immigrant and entrepreneur who spent a decade building software for startups. He has been where you are now, navigating negotiations, acing (and sometimes bombing) interviews, and carving out a path in the professional world. His experience, skills, and passion are distilled into the offerings of Zunamu, ensuring that we deliver solutions that truly meet your needs. We speak from experience, we build for your growth.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
          </Col >
          <Col xs={12} lg={8}>
            <Image variant="top" src={line} fluid
              className="about-us-image" />
          </Col>
        </Row>
      </Container>

      <footer className="text-light  mb-2" style={{ backgroundColor: '#0073B3', color: '#FFFFFF', marginTop: 'auto' }}>
        <Container className='pt-3 pb-3'>

          <div className='productcss mt-3'>
            <Image variant="top" src={ourproduct} style={{ height: 55 }}
              className="about-us-image " />
          </div>

          <Row className='mt-3 footertext p-0'>
            <Col className='ps-4 pe-4'>
              We created our first product, Interview University, for early and mid career professionals like you. It personalizes your interview preparation by using your resume and job description to generate custom interview questions specific to your role and then assists you in answering them in the best way possible, providing you
              feedback and guidance for improvement.
            </Col>
          </Row>

          <div className='productcss mt-5'>
            <Image variant="top" src={logo1} style={{ height: 75 }}
              className="about-us-image " />
          </div>
        </Container>
      </footer>

      <Container fluid className="about-us-container p-5">
        <Row className="no-gutters">
          <Col xs={12} lg={4} className="image-col">
            <Image variant="top" src={about} fluid
              className="about-us-image" />
          </Col>
          <Col xs={12} lg={8} className="text-col ps-5 mt-3">
            <div className="about-us-text">
              <span className='headerAbout'>  <Image variant="top" src={rectangle} fluid
                className="about-us-image" />
                <h2 className='abouttext'>OUR VISION</h2></span>
              <p>
                Zunamu sees a future beyond the present. We envision a world where professionals have their own career coach for every step of their journey - job interviews, promotions, performance reviews, and even challenging stakeholder conversations. We're here to reverse your negativity bias and transform challenging conversations into confident communication.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={4}>
          </Col >
          <Col xs={12} lg={8}>
            <Image variant="top" src={line} fluid
              className="about-us-image" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="about-us-container p-5 aboutbottom">
        <Row>
          <Col xs={12} lg={12} className="image-col">
            <Image variant="top" src={journey} fluid style={{ height: 55 }}
              className="about-us-image" />
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={12} lg={12} className="image-col">

            <Image variant="top" src={about4} fluid
              className="about-us-image" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={12} className="text-col">
            <div className="about-us-text pt-3">

              <p >
                Zunamu sees a future beyond the present. We envision a world where professionals have their own career coach for every step of their journey - job interviews, promotions, performance reviews, and even challenging stakeholder conversations. We're here to reverse your negativity bias and transform challenging conversations into confident communication.
              </p>
            </div>
          </Col>
        </Row>

      </Container>

      <Container fluid className='bottom-img footerimage'>
        <Row >
          <Col lg={12} className='footercss mt-3 mb-3'>
            <Image variant="top" fluid src={footerimg} />
          </Col>
        </Row>

      </Container>
    </div>
  )
}
