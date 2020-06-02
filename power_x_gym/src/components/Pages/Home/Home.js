import React from 'react';
import Banner from '../../Banner/Banner';
import Catalogue from '../../Catalogue/Catalogue';
import About from '../../About/About';
import Training from '../../Training/Training';
import Footer from '../../Footer/Footer';
import ChooseUs from '../../ChooseUs/ChooseUs';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catalogue></Catalogue>
           <About></About>
           <Training></Training>
           <ChooseUs></ChooseUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;