import React, { useState, useEffect } from 'react'
import { getInterviewSession, getInterviewSessionById } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { Card, Col, Container, Row, Form, Button, Image, Modal, Nav, CardBody } from 'react-bootstrap'
import { useNavigate,useParams } from 'react-router-dom';
import ep_back from '../../assets/images/ep_back.png'
import back from '../../assets/images/back.png'
import Loader from './../../Loader';
export default function ViewSavedSession() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [questionData, setquestionData] = useState([])
    const [selectedItem, setSelectedItem] = useState('');
    const [answerData, setanswerData] = useState('');
    const [answersData, setAnswersData] = useState([]);
    const [allData, setAllData] = useState('')
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        setLoading(true)
        dispatch(getInterviewSessionById(id.replace(":", "")))
            .then((result) => {
                setLoading(false)
                console.log(result.payload, "result")
                const obj = result?.payload
                setAllData(obj)


                const questionValues = Object.keys(obj)
                    .filter(key => key.startsWith("question"))
                    .map(questionKey => obj[questionKey]);

                { questionValues?.filter((item) => item != '')?.map((item, i) => ((i == 0) ? setSelectedItem(item) : '')) }
                setquestionData(questionValues)


                const answerValues = Object.keys(obj)
                    .filter(key => key.startsWith("answer"))
                    .map(questionKey => obj[questionKey]);
                setAnswersData(answerValues)

                { answerValues?.filter((item) => item != '')?.map((item, i) => ((i == 0) ? setanswerData(item) : '')) }


                console.log(answerValues, "answerValues");



            })
            .catch((error) => {
                console.log(error)
            });
    }, []);
    
   
    
    const handleItemClick = (item,index) => {
        // setLoading(true)
        console.log(item, "item")
        setanswerData('')
        setSelectedItem(item);

        { answersData?.filter((item) => item != '')?.map((item, i) => ((i == index) ? setanswerData(item) : '')) }


    };
    console.log(typeof (questionData), "questionData")
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>

                </div>
            )}
            <Container fluid>

                <Row className="smallscreenque seesionHeader  mb-3">

                <Col className="mt-lg-4 ms-lg-5  backsmall" ><span className='cursor' onClick={() => navigate('/interview')}><Image src={ep_back} height={20} /><span  className='ms-1 backcss'>Back</span></span></Col>

                </Row>

                <Row>
                    <Col lg={4} className='d-none d-lg-block'>

                        <Card className="flex-column cardbackground1 ms-5 me-2 mt-2 mb-2" style={{ height: '100vh', overflow: 'auto' }} >

                            {/* <div className='row ms-1 mt-3'>

                                <div className='col-sm d-flex justify-content-end me-2'><Image src={back} style={{ height: 30 }} /></div>
                            </div> */}
                            <Nav className="flex-column mb-2">

                                {questionData?.map((item, i) => (

                                    <Nav.Item key={item}
                                        className={`${selectedItem === item ? 'sideActive' : 'sideInactive'} pb-2`}
                                        onClick={() => handleItemClick(item,i)}>
                                        <Nav.Link href="#section1" className={`profiletext ${selectedItem === item ? 'activetext1' : 'notactive1'}`} >{item}</Nav.Link>
                                    </Nav.Item>

                                ))}
                            </Nav>
                        </Card>


                    </Col>

                    <Col lg={8}>
                        <Container>


                            <div className="row mb-2 mt-2">
                                <div className="col-sm">
                                    <Card>
                                        <CardBody style={{ height: '100vh' }}>
                                            <Form.Label className="d-flex backcss">
                                                {selectedItem}
                                            </Form.Label>
                                            <span className='answer'>Answer:</span>
                                            <p>
                                                {/* <Form.Control as="textarea" required style={{ minHeight: '90vh',overflow:'auto' }}
                                                value={answerData} onChange={(e) => setInputAnswerData(e.target.value)}
                                                /> */}
                                                {answerData}
                                            </p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>


                        </Container>


                    </Col>

                </Row>


            </Container>

        </div>
    )
}
