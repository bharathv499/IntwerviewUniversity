import React, { useState, useEffect } from 'react'
import { Nav, Modal, Button, Card, Row, Col, Image } from 'react-bootstrap';
import '../Account/Account.css'
import regenerate from '../../assets/images/regenerate.png'
import back from '../../assets/images/back.png'
import { getQuestion } from '../../redux/authSlice'
import { useDispatch } from "react-redux";

// export default function Sidebar(){

const Sidebar = () => {

    // useEffect(()=>{
    //     console.log(data,"props")
    // })

    // // const [data, setdata] = useState([]);
    // const dispatch = useDispatch()
    // // useEffect(() => {

    // //     const body = {
    // //         "model": "gpt-4",
    // //         "messages": [
    // //             {
    // //                 "role": "user",
    // //                 "content": "Kindly provide me 5 questions in the topic of datastructure in python and form the questions as list"
    // //             }
    // //         ]
    // //     }

    // //     dispatch(getQuestion(body))
    // //         .then((result) => {
    // //            // console.log(Object.values(result?.payload?.choices[0].message.content[0]), "res")

    // //               setdata(Object.values(result?.payload?.choices[0].message.content[0]))


    // //         })
    // //         .catch((error) => {
    // //             console.log(error)
    // //         });


    // // }, []);
    // const [showLogout, setshowLogout] = useState(false);
    // const [deleteacc, setdeleteacc] = useState(false);


    // const [selectedItem, setSelectedItem] = useState('');

    // const handleItemClick = (item) => {

    //     setSelectedItem(item);

    //     if (item === 5) {
    //         setshowLogout(true)
    //     }

    //     if (item === 4) {
    //         setdeleteacc(true)
    //     }

    // };

    // const items = [
    //     { id: 1, name: 'How do you approach understanding customer needs and pain points?' },
    //     { id: 2, name: 'How do you approach understanding customer needs and pain points?' },
    //     { id: 3, name: 'How do you approach understanding customer needs and pain points?' },
    //     { id: 4, name: 'How do you approach understanding customer needs and pain points?' },
    //     { id: 5, name: 'How do you approach understanding customer needs and pain points?' },
    // ];
    // return (
    //     <div>

    //         <Card className="flex-column cardbackground1 ms-5 me-2 mt-2 mb-2" style={{ height: '100vh' }} >

    //             <div className='row ms-1 mt-3'>
    //                 <div className='col-sm d-flex justify-content-center'><Image src={regenerate} style={{ height: 27 }} /></div>
    //                 <div className='col-sm d-flex justify-content-end me-2'><Image src={back} style={{ height: 30 }} /></div>
    //             </div>
    //             <Nav className="flex-column mb-2">

    //                 {data?.filter((item) => item != '')?.map((item, i) => (
    //                     <>
    //                         <Nav.Item key={item}
    //                             className={`${selectedItem === item ? 'sideActive' : 'sideInactive'} pb-2`}
    //                             onClick={() => handleItemClick(item)}>
    //                             <Nav.Link href="#section1" className={`profiletext ${selectedItem === item ? 'activetext1' : 'notactive1'}`} >{item}</Nav.Link>
    //                         </Nav.Item>
    //                     </>

    //                 ))}
    //             </Nav>
    //         </Card>


    //     </div>
    // )
}

export default Sidebar();