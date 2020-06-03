import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Payment from '../Payment/Payment';
import StepIndecator from '../StepIndecator/StepIndecator';

const Purchase = () => {
    const [step, setStep] = useState(1);
    const [capturedData, setCapturedData] = useState({});

    const stepHandler = (data) => {
        setStep(step + 1);
        const newData = {...capturedData, ...data};
        setCapturedData(newData);
    }
    console.log(capturedData);
    
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
                <h1>Thank you</h1>
            }
            
            
        </>
    );
};

export default Purchase;