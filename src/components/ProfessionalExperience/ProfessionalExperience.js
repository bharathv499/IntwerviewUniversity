import React,{useState} from "react";
import Sidebar from './../Account/Sidebar';
import { Row, Container, Col, Form, Button } from "react-bootstrap";
import './ProfessionalExperience.css'

export default function ProfessionalExperience() {
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        jobrole: '',
        industry: '',
        experience: '',
        location: '',
        goals: '',
        gender: '',
        address: '',
        city: '',
        zipcode: '',
        state: '',
        country: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const validationErrors = {};


        const form = event.currentTarget;
        if (form.checkValidity()) {
            // Perform form submission or other actions here
          

        } else {
            event.stopPropagation();
        }
        setValidated(true);


        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    }
    return (
        <>


            <Container fluid>
                <Row>
                    <Col lg={4} className="d-none d-lg-block">
                        <Sidebar />
                    </Col>
                    <Col xl={12} className='d-lg-none d-xl-none d-xl-block d-lg-block  d-flex justify-content-center'><Button className='myprofile' >Professional Experience</Button></Col>
                    <Col lg={8} className="mt-3 ">
                        <Form className="me-lg-5" noValidate validated={validated} onSubmit={handleFormSubmit}>
                            <div className="row">
                                <div className="col-sm">
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label className="text-start labelcss">Desired Job Role</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={formData.jobrole}
                                            name='jobrole'
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Please desired Job Role</Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-sm">
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label className="text-start labelcss">Preferred Industry</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={formData.industry}
                                            name='industry'
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Please enter preferred industry</Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-sm">
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label className="text-start labelcss">Experience</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={formData.experience}
                                            name='experience'
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Please enter experience</Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-sm">
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Label className="text-start labelcss">Job Location</Form.Label>
                                        <Form.Control
                                            type='text'
                                            value={formData.location}
                                            name='location'
                                            onChange={handleChange}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Please enter Job Location</Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                            </div>

                            <div className="row" >
                                <Form.Label className="text-start labelcss">  Career Goals</Form.Label>
                                <Form.Group controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" required
                                     value={formData.goals} onChange={handleChange}
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter  Career Goals</Form.Control.Feedback>
                                </Form.Group>
                            </div>

                            <div className="col-sm-6" style={{ paddingTop: 5 }}>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label className="text-start labelcss" style={{ display: 'flex', justifyContent: 'space-between' }}><span>Resume</span>  <span style={{ color: '#FF7F50', cursor: 'pointer' }} >Replace</span></Form.Label>
                                    <Form.Control
                                        type='text'
                                        className='textcontainer'
                                        value={formData.resume}
                                        name='resume'
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                </Form.Group>
                            </div>

                            <div className="row pasteresume">
                                <Form.Label className="text-start labelcss">Paste your Resume</Form.Label>
                                <Form.Group controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" required
                                    />
                                    <Form.Control.Feedback type="invalid">Please enter terms</Form.Control.Feedback>
                                </Form.Group>

                            </div>

                            <span className='d-flex ms-auto  justify-content-end pb-3'>

                                <Button className='savebtn' type="submit"  >Save</Button>
                                <Button className='cancelbtn ms-2 ' type="submit"  >Cancel</Button>

                            </span>
                        </Form>
                    </Col>

                </Row>


            </Container>



        </>

    )

}


