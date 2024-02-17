import { useState, useEffect } from "react";
import { Row, Button, Form, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
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
  const [showEyePassword, setShowEyePassword] = useState(false);

  const [showCurrPassword, setShowCurrPassword] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  const [errors, setErrors] = useState("");

  const body = {
    "old_password": currPassword,
    "password": password,
    "password2": confirm_password
  }


  const calculateStrength = (enteredPassword) => {
    const strength = (/[A-Z]/.test(enteredPassword) ? 1 : 0) +
      (/[a-z]/.test(enteredPassword) ? 1 : 0) +
      (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(enteredPassword) ? 1 : 0) +
      (enteredPassword.length >= 8 ? 1 : 0);

    return strength;
  };

  const getStrengthCategory = (strength) => {
    if (strength === 0) return 'Weak';
    if (strength === 1 || strength === 2) return 'Average';
    if (strength === 3) return 'Medium';
    return 'Strong';
  };

  const passwordStrength = calculateStrength(password);
  const strengthCategory = getStrengthCategory(passwordStrength);

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

    if (!currPassword) {
      validationErrors.password = "Please enter old password";
    }

    if (!isConfirmPasswordValid(password)) {
      validationErrors.New_Pass = "Please enter a valid New Password";
    }

    if (!isConfirmPasswordValid(confirm_password)) {
      validationErrors.confirm_password = "Please enter a valid Confirm password";
    }

    if (!isPasswordMatches(confirm_password)) {
      validationErrors.confirm_password_matches =
        "New Password and Confirm Password does not match";
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

  const handleTogglePasswordVisibilityPassword = () => {
    setShowCurrPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleTogglePasswordVisibilityPassword1 = () => {
    setShowNewPass((prevShowPassword) => !prevShowPassword);
  };

  const handleTogglePasswordVisibility = () => {
    setShowConfirmPass((prevShowPassword) => !prevShowPassword);
  };


  const handlePasswordChange = (event) => {
    if (event.target.value.length > 0) {
      setShowEye(true);
    } else {
      setShowEye(false);
    }
    const inputPassword = event.target.value;

    setCurrPassword(inputPassword);
    // Clear the error for password field if it becomes non-empty

    if (errors.password && inputPassword.trim()) {
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

    if (!regex.test(inputPassword)) {
      const updatedErrors = { ...errors };

      updatedErrors.New_Pass = "Please enter a valid New Password"

      setErrors(updatedErrors);
    }

    if (errors.New_Pass && regex.test(inputPassword)) {
      const updatedErrors = { ...errors };

      delete updatedErrors.New_Pass;

      setErrors(updatedErrors);
    }
  };


  const handleConfirmPasswordChange = (event) => {
    if (event.target.value.length > 0) {
      setShowEyePassword(true);
    } else {
      setShowEyePassword(false);
    }
    const inputPassword = event.target.value;

    setConfirm_password(inputPassword);

    // Clear the error for password field if it becomes non-empty

    if (!inputPassword) {
      const updatedErrors = { ...errors };

      updatedErrors.confirm_password = "Please enter Confirm Password"

      setErrors(updatedErrors);
    }

    if (inputPassword != password) {
      const updatedErrors = { ...errors };

      updatedErrors.confirm_password = "New Password and Confirm Password does not match"

      setErrors(updatedErrors);
    }

    if (inputPassword === password) {
      const updatedErrors = { ...errors };

      delete updatedErrors.confirm_password

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
    const rege = regex
    return rege.test(inputPassword);
  };
  const isPasswordMatches = (inputPassword) => {
    return inputPassword === password;
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Row >
        <Col lg={10}>
          <Form onSubmit={handleFormSubmit} >

            <Form.Group className='formgr' controlId="formBasicConfirmPassword" >
              <Form.Label className="text-start labelcss">Current Password</Form.Label>
              <div className='position-relative'>
                <Form.Control
                  type={showCurrPassword ? "text" : "password"}
                  className='inputcss passcss'
                  value={currPassword}
                  onChange={handlePasswordChange}
                  isInvalid={!!errors.password}
                />
                {showEye &&
                  <FontAwesomeIcon
                    className="fa-search eyeiconcp"
                    icon={showCurrPassword ? faEye : faEyeSlash}
                    onClick={handleTogglePasswordVisibilityPassword}
                  />
                }
              </div>
              <div style={{ color: "red" }}>{errors.password}</div>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group controlId="formBasicPassword" className="mt-2">
              <Form.Label className="text-start labelcss">
                New Password
              </Form.Label>
              <div className='position-relative'>
                <Form.Control
                  className='inputcss passcss'
                  type={showNewPass ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange1}
                  isInvalid={!!errors.New_Pass}
                />
                {showEyePass &&
                  <FontAwesomeIcon
                    className="fa-search eyeiconcp"
                    icon={showNewPass ? faEye : faEyeSlash}
                    onClick={handleTogglePasswordVisibilityPassword1}
                  />
                }
              </div>
              <div style={{ marginTop: '5px' }}>
                <progress value={passwordStrength * 25} max="100"></progress>
                <p>Password Strength: {strengthCategory}</p>
              </div>
              <div style={{ color: "red" }}>{errors.New_Pass}</div>
              <Form.Control.Feedback type="invalid">
                {errors.New_Pass}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              controlId="formBasicConfirmPassword"
              className="mt-2"
            >
              <Form.Label className="text-start labelcss">
                Confirm Password
              </Form.Label>
              <div className='position-relative'>
                <Form.Control
                  className='inputcss passcss'
                  type={showConfirmPass ? "text" : "password"}
                  value={confirm_password}
                  onChange={handleConfirmPasswordChange}
                  isInvalid={
                    !!errors.confirm_password ||
                    !!errors.confirm_password_matches
                  }
                />
                {showEyePassword && (
                  <FontAwesomeIcon
                    className="fa-search eyeiconcp"
                    icon={showConfirmPass ? faEye : faEyeSlash}
                    onClick={handleTogglePasswordVisibility}
                  />
                )}
              </div>
              <div style={{ color: "red" }}>{errors.confirm_password_matches || errors.confirm_password}</div>
              <Form.Control.Feedback type="invalid">
                {errors.confirm_password_matches || errors.confirm_password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group >
              <Button className='savebtn1' type="submit"  >Update Password</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ChangePassword;
