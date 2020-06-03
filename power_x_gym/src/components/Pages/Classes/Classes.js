import React from 'react';
import './Classes.css';
import victor from '../../../Images/victor-freitas-546919-unsplash.png';
import baylee from '../../../Images/baylee-gramling-5m4Z14SDL80-unsplash.jpg';
import humphrey from '../../../Images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg';
import alora from '../../../Images/alora-griffiths-TuzrzArccvc-unsplash.jpg';
import john from '../../../Images/john-fornander-FIu48iuo_4g-unsplash.jpg';
import sven from '../../../Images/sven-mieke-Lx_GDv7VA9M-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Footer from '../../Footer/Footer';


const Classes = () => {
    return (
        <div className="classes">
        <Breadcrumb title="Our classes"/>
            <div className="container">
                <div className="row_1">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={victor} alt=""/>
                            <div className="card-footer">
                            <label className="label-text font-weight-bold">PSYCHO TRAINING <FontAwesomeIcon icon={faArrowRight}/></label>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={baylee} alt=""/>
                            <div className="card-footer">
                            <label className="label-text font-weight-bold">SELF DEFENSE <FontAwesomeIcon icon={faArrowRight}/></label>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={humphrey} alt=""/>
                            <div className="card-footer">
                            <label className="label-text font-weight-bold">ADVANCE GYM  <FontAwesomeIcon icon={faArrowRight}/></label>
                            </div>
                        </div>
                        </div>
                </div>
                <div className="row_2">
                <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={alora} alt=""/>
                            <div className="card-footer">
                            <label className="label-text font-weight-bold">CARDIO TRAINING  <FontAwesomeIcon icon={faArrowRight}/></label>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={john} alt=""/>
                            <div className="card-footer">
                            <label className="label-text font-weight-bold">STRENGTH TRAINING <FontAwesomeIcon icon={faArrowRight}/></label>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={sven} alt=""/>
                            <div className="card-footer">
    
                            <label className="label-text font-weight-bold">PSYCHO TRAINING <FontAwesomeIcon icon={faArrowRight}/></label>
                            </div>
                        </div>
                        </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Classes;