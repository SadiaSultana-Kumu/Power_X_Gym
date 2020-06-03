import React from 'react';
import './About.css';
import wells from '../../Images/wells-chan-H-vAxuWxmi8-unsplash.jpg';

const About = () => {
    return (
        <div className="about py-5">
        <div  className="container">
          <div className="row">
            <div className="about-img col-md-6">
               <img src={wells} alt=""/>
            </div>
            <div className="back-img col-md-6">
               <h1 className="text-h1">WE HERE TO DREAM!</h1>
               <h2>OUR TEAM IS HERE SURVE YOU</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt enim soluta nam eligendi necessitatibus, quis ex cupiditate nihil quos, laborum exercitationem debitis earum quas maxime deleniti delectus reprehenderit incidunt minima.</p>
            </div>
        </div>
        </div>
    </div>
    );
};

export default About;