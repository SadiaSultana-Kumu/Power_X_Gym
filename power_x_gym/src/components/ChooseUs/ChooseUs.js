import React from 'react';
import './ChooseUs.css';
import div_1_img from '../../Images/Group 87.png';
import div_2_img from '../../Images/Group 88.png';
import div_3_img from '../../Images/gift-2.png';

const ChooseUs = () => {
        return (
            <div className="chooseus my-5">
            <div className="container">
               <h1  className="text-center"><span className="text">WHY </span>YOU CHOOSE US</h1>
              <div className="row text-center">
                    
                        <div className="card div_one py-2">
                            <img  src={div_1_img} alt=""/>
                            <h3 className="text-dark font-weight-bold">FREE FITNESS TRAINING</h3>
                            <p className="text-dark mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                        </div>
                        <div className="card div_two">
                            <img  src={div_2_img} alt=""/>
                            <h3 className="text-dark font-weight-bold">TONS OF CARDIO & STRENGTH</h3>
                            <p className="text-dark mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                        </div>
                        <div className="card div_three">
                            <img  src={div_3_img} alt=""/>
                            <h3 className="text-dark font-weight-bold">NO COMMITMENT MEMBERSHIPS</h3>
                            <p className="text-dark mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                        </div>
                  </div>
                </div>
            </div>
        );
    };
    

export default ChooseUs;