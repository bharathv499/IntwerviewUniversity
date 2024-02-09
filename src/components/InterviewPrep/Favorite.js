import React, { useEffect, useState } from 'react'
import { getFavoriteAnswerbyId } from '../../redux/authSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardBody, Container, Form, Row, Col, Image } from 'react-bootstrap';
import ep_back from '../../assets/images/ep_back.png'


export default function Favorite() {

    const { id } = useParams();
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        console.log(id.replace(":", ""))



        dispatch(getFavoriteAnswerbyId(id.replace(":", "")))
            .then((result) => {
                console.log(result, "result")
                setAnswer(result.payload.answer)
                setQuestion(result.payload.question)


            })
            .catch((error) => {
                console.log(error)
            });


    }, []);
    return (
        <div>

            <Container>
                <div className="row mb-2 mt-2">
                    <div className="col-sm cursor backsmall" onClick={() => navigate('/interview')}>

                        <Image src={ep_back} height={20} /><span className='ms-1 backcss'>Back</span>
                    </div>
                </div>
                <div className="row mb-2 mt-2">
                    <div className="col-sm">
                        <Card className='typeanswer'>
                            <CardBody style={{ height: '100vh' }}>
                                <Form>
                                    <Form.Label className="d-flex backcss">
                                        {question}
                                    </Form.Label>
                                    <span className='answer'>Answer:</span>
                                    <p>
                                        {answer}
                                    </p>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    )
}
