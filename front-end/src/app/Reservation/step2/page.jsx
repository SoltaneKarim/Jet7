"use client"
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
const cloudName = 'dww70arvk'; // Replace with your Cloudinary cloud name




const page = () => { 

  const handleToggleForm = () => {
    console.log('Toggling form visibility:', isLoginFormVisible);
    setLoginFormVisible(!isLoginFormVisible);
  };

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sexe, setSexe] = useState('Male'); // Default value is Male
  const [address, setAddress] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'fcqswjeg'); // Replace with your Cloudinary upload preset

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formData
        );
            console.log(response.data.secure_url);
        setSelectedImage(response.data.secure_url);
    } catch (error) {
        console.error('Error uploading image: ', error);
    }
};

  const handleLogin = async () => {
    try {
      // Send a GET request to retrieve user data
      const response = await axios.get('http://localhost:5000/user');
console.log("this is users",response);
      // Assuming the response data is an array of user objects
      const users = response.data;

      // Find the user with the matching email
      const user = users.find((user) => user.email === username);

      // If a user with the given email is found and the password matches, it's a successful login
      if (user && user.password === password) {
        alert('Login successful!');
        window.location.href = 'step3';
        // You can redirect the user to a different page or perform other actions here
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const loginForm = (
    <div className="login-block login-block-signin" style={{ display: 'block' }}>
      <div className="h4">
        Sign in{' '}
        <a
          href="javascript:void(0);"
          className="btn btn-main btn-xs btn-register pull-right"
          onClick={handleToggleForm}
        >
          create an account
        </a>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="col-xs-12 text-right">
          <button onClick={handleLogin} className="btn btn-main">
            Login
          </button>
        </div>
      </div>
    </div>
  );

  const handleCreateAccount = async () => {
    // Ensure all required fields are filled
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !address ||
      !selectedImage ||
      !confirmPassword === password
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Prepare the user registration data
    const userData = {
      fullName,
      email,
      password,
      phoneNumber,
      address,
      sexe,
      image: selectedImage,
    };

    try {
      // Send a POST request to the server for user registration
      const response = await axios.post('http://localhost:5000/user', userData);

      // Handle the response from the server as needed
      if (response.status === 200) {
        // Registration successful
        alert('Registration successful!');
        setAddress('')
        setConfirmPassword('')
        setSelectedImage('')
        setEmail('')
        setFullName('')
        setPassword('')
        setPhoneNumber('')
        setSexe("Male")
        // You can perform additional actions here, like redirecting the user to the login page.
      } else {
        // Registration failed
        alert('Registration failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error during registration: ', error);
    }
  };


  const registrationForm = (
    <div className="login-block login-block-signup">
    <div className="h4">
      Register now{' '}
      <a
        href="javascript:void(0);"
        onClick={setLoginFormVisible}
        className="btn btn-main btn-xs btn-login pull-right"
      >
        Log in
      </a>
    </div>
    <hr />
    <div className="row">
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="form-control"
            placeholder="Full name: *"
          />
        </div>
      </div>

      <div className="col-md-12">
        <div className="form-group">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="E-mail: *"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password: *"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-control"
            placeholder="Confirm Password: *"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
            placeholder="Phone: *"
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group" style={{ padding: '10px 17px' }}>
          <span> Pick your gender </span>
          <select
            name="sexe"
            id="gender"
            value={sexe}
            onChange={(e) => setSexe(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
            placeholder="Address: *"
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            placeholder="Image: *"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      <div className="col-md-12">
        <hr />
        <span className="checkbox">
          <input type="checkbox" id="checkBoxId1" />
          <label htmlFor="checkBoxId1">
            I have read and accepted the <a href="#">terms</a>, as well as read
            and understood our terms of <a href="#">business conditions</a>
          </label>
        </span>
        <span className="checkbox">
          <input type="checkbox" id="checkBoxId2" />
          <label htmlFor="checkBoxId2">
            Subscribe to exciting newsletters and great tips
          </label>
        </span>
        <hr />
      </div>
      <div className="col-md-12">
        <a href="#" className="btn btn-main btn-block" onClick={handleCreateAccount}>
          Create account
        </a>
      </div>
    </div>
  </div>
  );
  return (
    <div>
    {/* Page header */}
    <div
      className="page-header"
      style={{ backgroundImage: "url(assets/images/header-1.jpg)" }}
    >
      <div className="container">
        <h2 className="title">Confirm your reservation</h2>
        <p>Guest information</p>
      </div>
    </div>
  
    {/* Step wrapper */}
    <div className="step-wrapper">
      <div className="container">
        <div className="stepper">
          <ul className="row">
            <li className="col-md-4 active">
              <a href="reservation-1.html">
                <span data-text="Room & rates"></span>
              </a>
            </li>
            <li className="col-md-4 active">
              <a href="reservation-2.html">
                <span data-text="Reservation"></span>
              </a>
            </li>
            <li className="col-md-4">
           
                <span data-text="Checkout"></span>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    {/* Checkout */}
    <div className="checkout">
      <div className="container">
        <div className="clearfix">
          {/* Note block */}
          <div className="cart-wrapper">
            <div className="note-block">
              <div className="row">
                {/* Left content */}
                <div className="col-md-6">
                  {/* Login wrapper */}
                  <div className="login-wrapper">
                    <div className="white-block">
                      <div className="white-block">
                        {isLoginFormVisible ? (
                          loginForm
                        ) : (
                          registrationForm
                        )}
                      </div>
                    </div>
                  </div>{' '}
                  {/*/login-wrapper*/}
                </div>{' '}
                {/*/col-md-6*/}
                {/* Right content */}
                <div className="col-md-6">
                  <div className="white-block">
                    <div className="h4">Choose payment</div>
                    <hr />
                    <span className="checkbox">
                      <input
                        type="radio"
                        id="paymentCart"
                        name="paymentOption"
                      />
                      <label htmlFor="paymentCart">
                        <strong>Pay via credit cart</strong> <br />
                        <small>
                          (MasterCard, Maestro, Visa, Visa Electron, JCB and
                          American Express)
                        </small>
                      </label>
                    </span>
                    <span className="checkbox">
                      <input
                        type="radio"
                        id="paymentPayPal"
                        name="paymentOption"
                      />
                      <label htmlFor="paymentPayPal">
                        <strong>PayPal</strong> <br />
                        <small>
                          Purchase with your fingertips. Look for us the next
                          time you're paying from a mobile app, and checkout
                          faster on thousands of mobile websites.
                        </small>
                      </label>
                    </span>
                    <div className="payment payment-paypal">
                      <p>
                        <strong>Note:</strong>
                      </p>
                      <p>
                        Please allow three working days for the payment
                        confirmation to reflect in your{' '}
                        <a href="#">online account</a>. Once your payment is
                        confirmed, we will generate your e-invoice, which you
                        can view/print from your account or email.
                      </p>
                    </div>
                    <div className="payment payment-cart">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="payment-header">
                            <div>
                              <strong></strong>
                            </div>
                            <strong>Payment details</strong>
                          </div>
                          <div>
                            <i className="fa fa-cc-visa"></i>
                            <i className="fa fa-cc-mastercard"></i>
                            <i className="fa fa-cc-discover"></i>
                            <i className="fa fa-cc-amex"></i>
                            <i className="fa fa-cc-diners-club"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="tel"
                            value=""
                            name="cardNumber"
                            placeholder="Card Number"
                          />
                        </div>
                      </div>
                      <div className="col-xs-8">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="tel"
                            value=""
                            name="cardExpiry"
                            placeholder="MM / YY"
                          />
                        </div>
                      </div>
                      <div className="col-xs-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="tel"
                            value=""
                            name="cardCVC"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group">
                          <input
                            className="btn btn-main btn-block"
                            type="submit"
                            value="Submit"
                            name="cardNumber"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
        {/*/cart-wrapper*/}
        {/* Cart wrapper */}
      </div>
    </div>
  </div>
  
  );
};

export default page;
