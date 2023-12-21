import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './WelcomePage.css';
import { Button, Modal, Row, Col, Image, Card, Container, Form } from "react-bootstrap";
const steps = [
  { name: 'User Profile' },
  { name: 'Job Preferences' },
  { name: 'Experience Level' },
  { name: 'Career Goals' },
]; // Define your steps with names and emails

export default function WelcomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const handleDotClick = (index) => {
    setCurrentStep(index);
  };

  const activeStep = steps[currentStep];

  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    gender: '',
    number: "",
    password: "",
    linkedin: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="container mt-5">

      <div className="progress-dots">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="dot-container">
              <span
                className={`dot ${currentStep === index ? 'active' : currentStep > index ? 'completed' : ''}`}
                onClick={() => handleDotClick(index)}
              >
                {/* {index + 1} */}
              </span>
              <div className="dot-label">{step.name}</div>
            </div>
            {index < steps.length - 1 && <span className="line" />}
          </React.Fragment>
        ))}
      </div>

      {currentStep === 0 && (
        <Container className='mt-5 ps-5 pe-5'>
          <Row>
            <Col lg={12}>
              <div className="row mb-2">
                <div className="col-sm">
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Full Name</Form.Label>
                    <Form.Control
                      type='text'
                      value={formData.first_name}
                      name='first_name'
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter full name</Form.Control.Feedback>
                  </Form.Group>

                </div>
              </div>

              <div className="row mb-2 account-row">
                <div className="col-sm">
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Email Address</Form.Label>
                    <Form.Control
                      type='text'
                      className='textcontainer'
                      defaultValue={formData.email}
                      name='email'
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please Enter Email</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2 account-row">

                <div className="col-sm" style={{ paddingTop: 5 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Phone Number</Form.Label>
                    <Form.Control
                      type='text'
                      className='textcontainer'
                      name='number'
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter number</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-2 account-row">
                <div className="col-sm" style={{ paddingTop: 5 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Linkedin</Form.Label>
                    <Form.Control
                      type='text'
                      className='textcontainer'
                      value={formData.linkedin}
                      name='linkedin'
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter linkedin</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>


            </Col>
          </Row>
        </Container>
      )}

      {currentStep === 1 && (
        <Container className='mt-5 ps-5 pe-5'>
          <Row>
            <Col lg={12}>
              <div className="row mb-2">
                <div className="col-sm">
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Desired Job Role</Form.Label>
                    <Form.Control
                      type='text'
                      value={formData.first_name}
                      name='first_name'
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter full name</Form.Control.Feedback>
                  </Form.Group>

                </div>
              </div>

              <div className="row mb-2 account-row">
                <div className="col-sm">
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Preferred Industry</Form.Label>
                    <Form.Control
                      type='text'
                      className='textcontainer'
                      defaultValue={formData.email}
                      name='email'
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please Enter Email</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2 account-row">

                <div className="col-sm" style={{ paddingTop: 5 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Job Location</Form.Label>
                    <Form.Control
                      type='text'
                      className='textcontainer'
                      name='number'
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter number</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2 account-row">

                <div className="col-sm-3" style={{ paddingTop: 5 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Check
                      type="checkbox"
                      className='labelcss1'
                      label="Remote"
                    />
                  </Form.Group>
                </div></div>



            </Col>
          </Row>
        </Container>
      )}

      {currentStep === 2 && (
        <Container className='mt-5 ps-5 pe-5'>
          <Row>
            <Col lg={12}>
              <div className="row mb-2">
                <div className="col-sm">
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label className="d-flex labelcss">Experience Level</Form.Label>
                    <Form.Control
                      as="select"
                    >
                      <option value=""></option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please enter full name</Form.Control.Feedback>
                  </Form.Group>

                </div>
              </div>


            </Col>
          </Row>
        </Container>
      )}

      {currentStep === 3 && (
        <Container className='mt-5 ps-5 pe-5'>
          <Row>
            <Col lg={12}>
              <div className="row mb-2">
                <div className="col-sm">
                  <Form.Label className="d-flex labelcss">  Career Goals</Form.Label>
                  <Form.Group controlId="exampleForm.ControlTextarea1">

                    <Form.Control as="textarea" required style={{minHeight:'10rem'}}
                    />
                    <Form.Control.Feedback type="invalid">Please enter terms</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>


            </Col>
          </Row>
        </Container>
      )}



      {currentStep !== 3 && <div >
        <Button className='nextbtn' onClick={handleNext} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </div>}

      {currentStep === 3 && <div >
        <Button className='nextbtn' onClick={handleNext} >
          Submit
        </Button>
      </div>}
    </div>
  );
};
