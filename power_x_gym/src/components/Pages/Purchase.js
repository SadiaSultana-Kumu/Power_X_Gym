import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Payment from '../Payment/Payment';
import StepIndecator from '../StepIndecator/StepIndecator';

const Purchase = () => {
    const [step, setStep] = useState(1);
    const [capturedData, setCapturedData] = useState({});
    const [orderId, setOrderId] = useState(null);

    const stepHandler = (data) => {
        setStep(step + 1);
        const newData = {...capturedData, ...data};
        setCapturedData(newData);
    }
    console.log(capturedData);
    if(step === 3){
        fetch("https://power-x.herokuapp.com/api/v1/insert-invoice" , {
            method:"POST",
            body: JSON.stringify(capturedData),
            headers :{
                "Content-Type" : "application/json"
            } 
        })
        .then(res=> res.json())
        .then(data => setOrderId(data._id))
    }
    return (
        <>
            <Breadcrumb title={"Your Gym Membership"}/>
            <StepIndecator current={step} />
            {
                step === 1 ? 
                <PersonalDetails stepHandler={stepHandler}/>
                : step === 2 ?
                <Payment stepHandler={stepHandler}/>
                :
                <div className="container text-center py-5">
                    <h1 className="text-success">
                        Thank you for Registration
                    </h1>
                    <p className="lead">Your Order id  is :  {orderId}</p>
                </div>
            }
            
           
            
        </>
    );
};

export default Purchase;