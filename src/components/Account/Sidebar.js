import React, { useState,useEffect } from 'react'
import './Account.css';
import { Nav, Modal, Button, Card, Row, Col } from 'react-bootstrap';
import ChangePassword from './ChangePassword';
import { logout } from '../../redux/authSlice';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const dispatch = useDispatch()
  
    const [showLogout, setshowLogout] = useState(false);
    const [deleteacc, setdeleteacc] = useState(false);
    const navigate= useNavigate()
    const handleClose1 = () => setshowLogout(false);
    const handleClose2 = () => setdeleteacc(false);
    
    const [selectedItem, setSelectedItem] = useState(1);
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    useEffect(() => {
  
    }, [isAuthenticated])
    const handleItemClick = (item) => {
        setSelectedItem(item);
       

        if (item === 1) {
            navigate('/account')
        }


        if (item === 2) {
            navigate('/experience')
        }

        if (item === 3) {
            navigate('/feedback')
        }

        if (item === 4) {
            setdeleteacc(true)
        }

        if (item === 5) {
            setshowLogout(true)
        }

        

    };

    const items = [
        { id: 1, name: 'My Profile' },
        { id: 2, name: 'Professional Experience' },
        { id: 3, name: 'Support/ Send Feedback' },
        { id: 4, name: 'Delete Account' },
        { id: 5, name: 'Log out' },
    ];

    const onLogout = () => {
       
        //dispatch(logout())
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        localStorage.removeItem('userId')
        localStorage.removeItem('isAuthenticated')
        localStorage.setItem('isAuthenticated', false)
        localStorage.clear();
        // console.log(isAuthenticated,"isAuthenticated")
        // if (!isAuthenticated) 
        navigate('/')
       
       
      }
    return (
        <div>

            <Card className="flex-column cardbackground ms-5 me-2 mt-2 mb-2" style={{ height: '100vh' }} >
                <Nav className="flex-column">
                    {items.map((item) => (
                        <Nav.Item key={item.id} onClick={() => handleItemClick(item.id)}
                            className={`${selectedItem === item.id ? 'selected-line' : 'navcss'}`}
                            >
                            <Nav.Link href="#section1" className={`navText ${selectedItem === item.id ? 'activetext' : 'notactive'}`} >{item.name}</Nav.Link>
                        </Nav.Item>

                    ))}
                </Nav>
            </Card>

            <Modal show={showLogout} onHide={handleClose1}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='modaltitle'>
                    <Modal.Title className='modaltitle1'>Log out</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='logout'>
                        <span className="logoutlabel">Are you sure you want to Log out?
                        </span>
                        <span>
                            <Button className='cancelbtn' type="submit"  onClick={()=> onLogout()}>Yes</Button>
                            <Button className='savebtn' style={{marginLeft:5}} type="submit"  >No</Button>
                        </span>
                    </div>
                </Modal.Body>

            </Modal>

            <Modal show={deleteacc} onHide={handleClose2}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='modaltitle'>
                    <Modal.Title className='modaltitle1'>Delete Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='logout'>
                        <span className="logoutlabel">Are you sure you want to delete the account? 
                        </span>
                        <span>
                            <Button className='cancelbtn' type="submit"  >Yes</Button>
                            <Button className='savebtn' style={{marginLeft:5}} type="submit"  >No</Button>
                        </span>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}
