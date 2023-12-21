import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import facebook from '../../assets/images/facebook.svg'
import {  Image } from "react-bootstrap";
const FacebookLoginButton = ({ onFacebookLogin }) => {
  const responseFacebook = (response) => {
    onFacebookLogin(response.accessToken);
  };

  return (

    <FacebookLogin
      appId="1161308458168324"
      autoLoad={false}
      fields="name,picture"
      scope="email"
      callback={responseFacebook}

      render={(renderProps) => (
        <Image src={facebook} onClick={renderProps.onClick} alt="Image" className='socialface' />

      )}
    />
  );
};

export default FacebookLoginButton;
