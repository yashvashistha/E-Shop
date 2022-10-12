import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CheckOutSteps from '../components/CheckOutSteps';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';

export default function PaymentScreen() {
  const nav = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentmethodname, setPaymentMethod] = useState(
    paymentMethod || 'Cash On Delivery'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      nav('/shipping');
    }
  }, [shippingAddress, nav]);

  const paymentHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentmethodname });
    localStorage.setItem('paymentMethod', paymentmethodname);
    nav('/placeorder');
  };

  return (
    <div>
      <CheckOutSteps step1 step2 step3></CheckOutSteps>

      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>

        <h1 className="my-3">Payment Method</h1>

        <Form onSubmit={paymentHandler}>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Cash On Delivery"
              label="Cash On Delivery"
              value="Cash On Delivery"
              checked={paymentmethodname === 'Cash On Delivery'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Form.Check
              type="radio"
              id="GPay"
              label="GPay"
              value="GPay"
              checked={paymentmethodname === 'GPay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <Button type="submit">Continue</Button>
        </Form>
      </div>
    </div>
  );
}
