import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { Card, Col, Container, Row, Form, Button, Image, Modal, Nav, CardBody } from 'react-bootstrap'
import arrow from '../../assets/images/arrow.png'
import like from '../../assets/images/like.png'
import ep_back from '../../assets/images/ep_back.png'
import './InterviewQuestion.css'
import { getQuestion } from '../../redux/authSlice'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import regenerate from '../../assets/images/regenerate.png'
import back from '../../assets/images/back.png'
import Loader from './../../Loader';

export default function InterviewQuestion() {

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const [questionInterview, setQuestionInterview] = useState(false)
    const questionCLose = () => setQuestionInterview(false)
    const [loading, setLoading] = useState(false);
    const [typeanswer, settypeanswer] = useState(true);
    const [showans, setshowans] = useState(false);

    const [questionData, setQuestionData] = useState([]);
    const [answerData, setanswerData] = useState([]);

    const location = useLocation();
    const userdata = location.state?.userData || [];
    // console.log(userdata, "userdata")
    // const useEffect
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        setLoading(true)
        const body = {
            "model": "gpt-4",
            "messages": [
                userdata
            ]
        }

        dispatch(getQuestion(body))
            .then((result) => {
                console.log(result, "res")
                setQuestionData(Object.values(result?.payload?.choices[0].message.content[0]))
                const data=Object.values(result?.payload?.choices[0].message.content[0]);
                {data?.filter((item) => item != '')?.map((item, i) => ( (i == 0) ? setSelectedItem(item):''))}
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            });


    }, []);


    const [showLogout, setshowLogout] = useState(false);
    const [deleteacc, setdeleteacc] = useState(false);



    const handleItemClick = (item) => {
        setLoading(true)
        console.log(item, "item")
        setSelectedItem(item);

        const body = {
            "model": "gpt-4",
            "messages": [
                {
                    "role": "user",
                    "content": item
                }
            ]
        }

        dispatch(getQuestion(body))
            .then((result) => {
                console.log(result)
                setanswerData(Object.values(result?.payload?.choices[0].message.content[0]))
                //setQuestionData(Object.values(result?.payload?.choices[0].message.content[0]))

                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            });



    };


    const regenerateQ = () => {
        setLoading(true)
        const body = {
            "model": "gpt-4",
            "messages": [
                userdata
            ]
        }

        dispatch(getQuestion(body))
            .then((result) => {
                console.log(result, "res")
                setQuestionData(Object.values(result?.payload?.choices[0].message.content[0]))
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const helpmeClick = () => {
        setLoading(true)
        settypeanswer(false)
        setshowans(true)

        const body = {
            "model": "gpt-4",
            "messages": [
                {
                    "role": "user",
                    "content": selectedItem
                }
            ]
        }

        dispatch(getQuestion(body))
            .then((result) => {
                console.log(result)
                setanswerData(Object.values(result?.payload?.choices[0].message.content[0]))
                //setQuestionData(Object.values(result?.payload?.choices[0].message.content[0]))

                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div>
            <Container fluid>
                {loading ? (
                    <Loader />
                ) : (
                    <div>

                    </div>
                )}
                <Row className="smallscreenque seesionHeader  mb-3">

                    <Col className="mt-lg-4 ms-lg-5 cursor backsmall" onClick={() => navigate('/interview')}><Image src={ep_back} height={20} /><span className='ms-1 backcss'>Back</span></Col>
                    <Col className="d-flex justify-content-end  mt-lg-2 me-lg-5 mx-auto"> <Button className='sessionbtn' type="submit" >Save Interview Session</Button></Col>
                </Row>
                <Row className='d-lg-none seequestion'>
                    <Col>
                        <button type="button" className="btn btn-outline-primary ms-2 mb-2">See All Questions</button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className='d-none d-lg-block'>

                        <Card className="flex-column cardbackground1 ms-5 me-2 mt-2 mb-2" style={{ height: '120vh' }} >

                            <div className='row ms-1 mt-3'>
                                <div className='col-sm d-flex justify-content-center cursor'><Image onClick={() => regenerateQ()} src={regenerate} style={{ height: 27 }} /></div>
                                <div className='col-sm d-flex justify-content-end me-2'><Image src={back} style={{ height: 30 }} /></div>
                            </div>
                            <Nav className="flex-column mb-2">

                                {questionData?.filter((item) => item != '')?.map((item, i) => (
                                    <>
                                        <Nav.Item key={item}
                                            className={`${selectedItem === item ? 'sideActive' : 'sideInactive'} pb-2`}
                                            onClick={() => handleItemClick(item)}>
                                            <Nav.Link href="#section1" className={`profiletext ${selectedItem === item ? 'activetext1' : 'notactive1'}`} >{item}</Nav.Link>
                                        </Nav.Item>
                                    </>

                                ))}
                            </Nav>
                        </Card>


                    </Col>
                    <Col lg={8}>
                        <Container>

                            {typeanswer && <div className="row mb-2 mt-2">
                                <div className="col-sm">
                                    <Card className='typeanswer'>
                                        <CardBody style={{ height: '110vh' }}>
                                            <Form.Label className="d-flex backcss">
                                                {selectedItem}
                                            </Form.Label>
                                            <span className='answer'>Answer:</span>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">

                                                <Form.Control as="textarea" required style={{ minHeight: '90vh' }}
                                                    placeholder='Type your answer..'
                                                />
                                                <Form.Control.Feedback type="invalid">Please enter terms</Form.Control.Feedback>
                                            </Form.Group>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>}

                            {showans && <div className="row mb-2 mt-2">
                                <div className="col-sm">
                                    <Card>
                                        <CardBody style={{ height: '90vh' }}>
                                            <Form.Label className="d-flex backcss">
                                                {selectedItem}
                                            </Form.Label>
                                            <span className='answer'>Answer:</span>
                                            <p>
                                                {answerData}
                                            </p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>}
                            <div className='questionBottom mb-2'>
                                <span className='liketext cursor d-none d-lg-block'><Image src={like} className='arrowimg' />Favorite this answer</span>
                                <span className='liketext cursor d-lg-none'><Image src={like} className='arrowimg' />Save this answer</span>
                                <span >
                                    <Button className='questionsave' type="submit"  >Submit
                                        <Image src={arrow} style={{ height: 22 }} className='ms-2 ' />
                                    </Button>
                                    <Button className='helpbtncss ms-2' type="submit" onClick={() => helpmeClick()}>Help me</Button>
                                </span>
                            </div>

                        </Container>


                    </Col>
                </Row>

                <Modal show={questionInterview} onHide={questionCLose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered className="newInterview interviewQuestion"
                >
                    <Modal.Body className="newModal p-4">
                        <p className='feedback'>Feedback</p>
                        <p className='feedbacktext'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className='feedbacktext'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <span className="d-flex ms-xs-3 justify-content-end ms-auto">
                            <Button className='savebtn' type="submit" onClick={questionCLose} >Close</Button>
                        </span>
                    </Modal.Body>

                </Modal>
            </Container>
        </div>
    )
}
