import { useState, useEffect } from "react";
import { Row, Button, Form, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/authSlice";

const ChangePassword = () => {
  const dispatch = useDispatch()
  const [currPassword, setCurrPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [showEye, setShowEye] = useState(false);
  const [showEyePass, setShowEyePass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrPasswordPass, setShowCurrPasswordPass] = useState(false);
  const [showPasswordPass, setShowPasswordPass] = useState(false);
  const [showEyeCurrPass, setShowEyeCurrPass] = useState(false);
  const [errors, setErrors] = useState("");

  const body={
    "old_password":currPassword,
    "password":password,
    "password2":confirm_password
  }

  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    dispatch(changePassword(body))
    // .then((result)=>{
    //   console.log(result,"result")
    //         // toast.success(detail, {
    //         //         position: toast.POSITION.TOP_RIGHT,
    //         //         autoClose: 2000,
    //         //         hideProgressBar: true,
    //         //     });
    // })
    // Perform validation

    const validationErrors = {};

    if (!isPasswordValid(password)) {
      validationErrors.password = "Please enter a valid password";
    }

    if (!isConfirmPasswordValid(confirm_password)) {
      validationErrors.confirm_password = "Please enter a valid password";
    }
    if (!isPasswordMatches(confirm_password)) {
      validationErrors.confirm_password_matches =
        "Password and Confirm does not match";
    }
    if (!isCurrPasswordValid(currPassword)) {
      validationErrors.currPassword = "Enter a valid Current Password";
    }

    //Set validation errors if any

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      //   toast.success('Signup Successful!', {
      //     position: toast.POSITION.TOP_RIGHT,
      //     autoClose: 2000,
      //     hideProgressBar: true,
      //   });

      setCurrPassword("");
      setPassword("");
      setConfirm_password("");
    }
    // Form is valid, perform login logic here

    // Reset form fields and errors

    setErrors({});
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglePasswordVisibilityPassword = () => {
    setShowPasswordPass((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrPasswordPass((prevShowPassword) => !prevShowPassword);
  };
  const handleCurrentPasswordChange = (event) => {
    if (event.target.value.length > 0) {
      setShowEyeCurrPass(true);
    } else {
      setShowEyeCurrPass(false);
    }
    const inputPassword = event.target.value;

    setCurrPassword(inputPassword);
    // Clear the error for password field if it becomes non-empty

    if (errors.currPassword && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };

      delete updatedErrors.currPassword;

      setErrors(updatedErrors);
    }
  };
  const handlePasswordChange = (event) => {
    if (event.target.value.length > 0) {
      setShowEyePass(true);
    } else {
      setShowEyePass(false);
    }
    const inputPassword = event.target.value;

    setCurrPassword(inputPassword);
    // Clear the error for password field if it becomes non-empty

    if (errors.password && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };

      delete updatedErrors.password;

      setErrors(updatedErrors);
    }
  };

  const handlePasswordChange1 = (event) => {
    if (event.target.value.length > 0) {
      setShowEyePass(true);
    } else {
      setShowEyePass(false);
    }
    const inputPassword = event.target.value;

    setPassword(inputPassword);
    // Clear the error for password field if it becomes non-empty

    if (errors.password && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };

      delete updatedErrors.password;

      setErrors(updatedErrors);
    }
  };

  
  const handleConfirmPasswordChange = (event) => {
    if (event.target.value.length > 0) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
    const inputPassword = event.target.value;

    setConfirm_password(inputPassword);

    // Clear the error for password field if it becomes non-empty

    if (errors.confirm_password && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };

      delete updatedErrors.confirm_password;

      setErrors(updatedErrors);
    }
    if (errors.confirm_password_matches && inputPassword === password) {
      const updatedErrors = { ...errors };

      delete updatedErrors.confirm_password_matches;

      setErrors(updatedErrors);
    }
  };
  const isPasswordValid = (inputPassword) => {
    // Implement your own password validation logic

    return inputPassword.trim().length > 8;
  };
  const isCurrPasswordValid = (inputPassword) => {
    // Implement your own password validation logic

    return inputPassword.trim().length > 8;
  };
  const isConfirmPasswordValid = (inputPassword) => {
    // Implement your own password validation logic

    return inputPassword.trim().length > 8;
  };
  const isPasswordMatches = (inputPassword) => {
    return inputPassword === password;
  };

  return (
    <div >
     
    
        <ToastContainer></ToastContainer>
          <Row >
            <Col lg={10}>
              <Form onSubmit={handleFormSubmit} >

              <Form.Group  controlId="formBasicPassword" >
                  <Form.Label className="text-start labelcss">
                  Current Password
                  </Form.Label>
                 
                  <Form.Control
                  className="search-form"
                    type={showPasswordPass ? "text" : "password"}
                   
                    value={currPassword}
                    onChange={handlePasswordChange}
                    isInvalid={!!errors.password}
                  />
                  {/* {showEyePass &&
                    <FontAwesomeIcon
                      className="fa-search"
                      icon={showPasswordPass ? faEye : faEyeSlash}
                      onClick={handleTogglePasswordVisibilityPassword}
                    />
                  } */}
                  <Form.Control.Feedback type="invalid">
                    {errors.password}</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group  controlId="formBasicPassword" className="mt-2">
                  <Form.Label className="text-start labelcss">
                    New Password
                  </Form.Label>
                
                  <Form.Control
                  className="search-form"
                    type={showPasswordPass ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange1}
                    isInvalid={!!errors.password}
                  />
                  {/* {showEyePass &&
                    <FontAwesomeIcon
                      className="fa-search"
                      icon={showPasswordPass ? faEye : faEyeSlash}
                      onClick={handleTogglePasswordVisibilityPassword}
                    />
                  } */}
                  <Form.Control.Feedback type="invalid">
                    {errors.password}</Form.Control.Feedback>
                </Form.Group>
              
                <Form.Group
                  controlId="formBasicConfirmPassword"
                  className="mt-2"
                >
                  <Form.Label className="text-start labelcss">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                  className="search-form"
                    type={showPassword ? "text" : "password"}
                    value={confirm_password}
                    onChange={handleConfirmPasswordChange}
                    isInvalid={
                      !!errors.confirm_password ||
                      !!errors.confirm_password_matches
                    }
                  />
                  {/* {showEye && (
                    <FontAwesomeIcon
                    className="fa-search"
                      icon={showPassword ? faEye : faEyeSlash}
                      onClick={handleTogglePasswordVisibility}
                    />
                  )} */}

                  <Form.Control.Feedback type="invalid">
                    {errors.confirm_password_matches || errors.confirm_password}
                  </Form.Control.Feedback>
                </Form.Group>
             
                <Form.Group >
                <Button className='savebtn' type="submit"  >Update Password</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
    </div>
  );
};

export default ChangePassword;
