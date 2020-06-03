import React from 'react';
import './Training.css';

const Training = () => {
    return (
        <div className="training py-5">
        <div className="container">
          <h1 className="training-program">TRAINING <span className="program">PROGRAMS</span></h1>
          <div className="row pt-4">
            <div className="col-md-6 bruce">
               <label className="highlight-training font-weight-bold  d-flex justify-content-between">
               <span> YOGA TRAINING SESSION</span>
               <span>&#8594;	</span>
               </label>
              
            </div>
            <div className="col-md-6 arthur">
               <label className="highlight-training font-weight-bold  d-flex justify-content-between">
               <span>CARDIO TRAINING SESSION</span>
               <span>&#8594;	</span>
               </label>
              
            </div>
        </div>
        </div>
        </div>
    );
};

export default Training;