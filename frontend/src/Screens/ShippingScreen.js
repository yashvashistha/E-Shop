import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckOutSteps from '../components/CheckOutSteps';

export default function ShippingScreen() {
  const nav = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  const [fullname, setFullName] = useState(shippingAddress.fullname || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [pincode, setPINCode] = useState(shippingAddress.pincode || '');
  const [country, setCountry] = useState(shippingAddress.country || '');
  const [phonenumber, setNumber] = useState(shippingAddress.phonenumber || '');

  useEffect(() => {
    if (!userInfo) {
      nav('/signin?redirect=/shipping');
    }
  }, [userInfo, nav]);

  const submitHandler = (e) => {
    e.preventDefault();

    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        fullname,
        address,
        city,
        pincode,
        country,
        phonenumber,
      },
    });

    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({ fullname, address, city, pincode, country, phonenumber })
    );

    nav('/payment');
  };

  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>

      <CheckOutSteps step1 step2></CheckOutSteps>

      <div className="container small-container">
        <h1 className="my-3">Shipping Address</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pincode">
            <Form.Label>PIN Code</Form.Label>
            <Form.Control
              value={pincode}
              onChange={(e) => setPINCode(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phonenumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={phonenumber}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </Form.Group>

          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
