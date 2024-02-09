import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './WelcomePage.css';
import { Button, Modal, Row, Col, Image, Card, Container, Form } from "react-bootstrap";
import { InitiationQuestions, getInitiationQuestions, getUserProfile, updateProfile } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const steps = [
  { name: 'User Profile' },
  { name: 'Job Preferences' },
  { name: 'Experience Level' },
  { name: 'Career Goals' },
]; // Define your steps with names and emails

export default function WelcomePage({ closeModal }) {
  // const [currentStep, setCurrentStep] = useState(0);
  const [experience, setExperience] = useState('');
  const dispatch = useDispatch()

  // const [errors, setErrors] = useState({});
  // const handleNext = () => {
  //   setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  // };

  // const [formData, setFormData] = useState({
  //   full_name: '',
  //   email: '',
  //   phone_number: '',
  //   linkedin: '',
  //   desired_job_role: '',
  //   preferred_industry: '',
  //   job_location: "",
  //   experience: "",
  //   career_goal: "",
  //   remote_option: ""
  // });
  useEffect(() => {

    dispatch(getInitiationQuestions())
      .then((result) => {
        console.log(result, "question")
        // formData.full_name=result.payload.full_name

      })
      .catch((error) => {
        console.log(error)
      });

      dispatch(getUserProfile())
      .then((result) => {
         
          const data=result.payload;
          console.log(data.email,"data.email")

          formData.email = data.email;
      })

  }, []);


  const handleDotClick = (index) => {
    setCurrentStep(index);
  };



  const handleSelect = (event) => {

    setExperience(event.target.value)
  };
  const [tnc, setTnc] = useState(false);
  const handleOptionChecked = () => {
    setTnc(!tnc);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const saveData = () => {
    closeModal()
    formData.experience = experience
    formData.remote_option = tnc
    console.log(formData, "formData")
    localStorage.setItem('username', formData.full_name)
    dispatch(InitiationQuestions(formData))
    dispatch(updateProfile(formData))
    toast.success('Data saved successfully', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      hideProgressBar: true,
    });

    
    // .then((result) => {
    //   console.log(result.payload, "onboarding")


    // })
    // .catch((error) => {
    //   console.log(error)
    // });
  }


  ///////////validation



  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    step1Data: '',
    step2Data: '',
    step3Data: '',
    step4Data: '',
    // Add more fields for each step as needed
  });
  const [errors, setErrors] = useState({
    step1Error: '',
    step2Error: '',
    step3Error: '',
    step4Error: '',
    // Add more fields for each step as needed
  });

  // Validation logic for each step
  const validateStep1 = () => {
    if (!formData.step1Data.trim()) {
      setErrors({ ...errors, step1Error: 'User Profile data is required' });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.step2Data.trim()) {
      setErrors({ ...errors, step2Error: 'Job Preferences are required' });
      return false;
    }
    return true;
  };

  
  const validateStep3 = () => {
    if (!formData.step3Data.trim()) {
      setErrors({ ...errors, step3Error: 'Experience Level is required' });
      return false;
    }
    return true;
  };

  const validateStep4 = () => {
    if (!formData.step4Data.trim()) {
      setErrors({ ...errors, step4Error: ' Career Goals are required' });
      return false;
    }
    return true;
  };
 
  // Function to handle "Next" button click
  const handleNextClick = () => {
    let isValid = true;
    switch (currentStep) {
      case 0:
        isValid = validateStep1();
        break;
      case 1:
        isValid = validateStep2();
        break;
      case 2:
          isValid = validateStep3();
          break; 
      case 3:
            isValid = validateStep4();
            break;      
      // Add cases for additional steps as needed
      default:
        break;
    }

    if (isValid) {
      // Proceed to the next step
      setCurrentStep(currentStep + 1);
    }
  };

  
  return (
    <div className="container mt-5">
      <ToastContainer />
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
                      
                      name='full_name'
                      value={formData.step1Data}
                      onChange={(e) =>
                        setFormData({ ...formData, step1Data: e.target.value })
                      }
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
                      name='phone_number'
                      value={formData.phone_number}
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
              {errors.step1Error && <p className='step-error'>{errors.step1Error}</p>}

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
                      value={formData.step2Data}
                      onChange={(e) =>
                        setFormData({ ...formData, step2Data: e.target.value })
                      }
                      name='desired_job_role'
                    />
                    <Form.Control.Feedback type="invalid">Please enter role</Form.Control.Feedback>
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
                      defaultValue={formData.preferred_industry}
                      name='preferred_industry'
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please Enter Preferred Industry</Form.Control.Feedback>
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
                      name='job_location'
                      value={formData.job_location}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">Please enter job location</Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
              <div className="row mb-2 account-row">

                <div className="col-sm-3" style={{ paddingTop: 5 }}>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Check
                      type="checkbox"
                      className='labelcss1'
                      name="remote_option"
                      label="Remote"
                      checked={tnc}
                      onChange={handleOptionChecked}
                    />
                  </Form.Group>
                </div></div>
                {errors.step2Error && <p className='step-error'>{errors.step2Error}</p>}
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
                      name="experience"
                      onChange={handleSelect}
                      value={experience}
                    >
                      <option value=""></option>
                      <option value="Level1">Level 1</option>
                      <option value="Level2">Level 2</option>
                      <option value="Level3">Level 3</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">Please select Experience Level</Form.Control.Feedback>
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

                    <Form.Control as="textarea" name="career_goal" required style={{ minHeight: '10rem' }}
                      onChange={handleChange} defaultValue={formData.career_goal}
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
        <Button className='nextbtn' onClick={handleNextClick} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </div>}

      {currentStep === 3 && <div >
        <Button className='nextbtn' onClick={saveData} >
          Submit
        </Button>
      </div>}
    </div>
  );
};
