import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_Jpypd5jHyaXG76tq3VTUVnJ400tE3kZ8dD');
    return (
        <div className="payment">
        <Breadcrumb title={"Your Gym Membership"}/>
            <div className="container">
                <div className="stripe row">
                <Elements stripe={stripePromise}>
                  <CheckoutForm/>
                       </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
