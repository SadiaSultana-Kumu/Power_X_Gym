import React from 'react';
import './AdvancedGym.css';
import humphreymule from '../../../Images/humphrey-muleba.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Footer from '../../Footer/Footer';
import chechmark from '../../../Images/checkmark-square-2.png';

const AdvancedGym = () => {
    return (
        <div className="advancedGym">
         <Breadcrumb title="Advanced Gym"/>
            <div className="container">
                <div className="row">
                     <div className="col-md-5">
                        <img src={humphreymule} alt=""/>
                     </div>
                     <div className="col-md-7">
                      <h2 className="font-weight-bold"><span className="text">CLASS</span> SCHEDULE</h2>
                        <div className="row m-4">
                            <div className="col-3">
                                <label className="schedule-label"><h6>Monday</h6>
                                <p><small><span className="text">8:00AM-9:00AM</span></small></p></label>
                            </div>
                            <div lassName="col-3">
                            <label className="schedule-label"><h6>Tuesday</h6>
                                <p><small><span className="text">10:00AM-11:00AM</span></small></p></label>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className="col-3">
                            <label className="schedule-label"><h6>WednesDay</h6>
                                <p><small><span className="text">7:00AM-8:00AM</span></small></p></label>
                            </div>
                            <div lassName="col-3">
                            <label className="schedule-label"><h6>Thursday</h6>
                                <p><small><span className="text">5:00PM-6:00PM</span></small></p></label>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className="col-3">
                                <label className="schedule-label"><h6>Friday</h6>
                                <p><small><span className="text">6:00AM-7:00AM</span></small></p></label>
                            </div>
                            <div lassName="col-3">
                            <label className="schedule-label"><h6>Saturday</h6>
                                <p><small><span className="text">7:00PM-8:00PM</span></small></p></label>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="pr-3 pt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, unde architecto assumenda, accusamus explicabo dolorum laborum amet harum quis aut nobis deleniti odio iure, eius cum perferendis maxime doloribus. Fugiat.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6><img src={chechmark} alt=""/> Having Slimmer Shaply Thighs</h6><br/>
                        <h6><img src={chechmark} alt=""/> Getting Stronger Body</h6><br/>
                        <h6><img src={chechmark} alt=""/> Increased Metabolism</h6><br/>
                        <h6><img src={chechmark} alt=""/> Increased Muscular Endurance</h6><br/>
                        <h6><img src={chechmark} alt=""/> Maximum Results in Less Time</h6><br/>
                        <h6><img src={chechmark} alt=""/> Firm Hips and Tummy</h6><br/>
                    </div>
                    <div className="check col-md-6">
                         <button className="check-btn font-weight-bold">JOIN US</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdvancedGym;