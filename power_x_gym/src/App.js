import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Pricing from './components/Pages/Pricing';
import Purchase from './components/Pages/Purchase';
import Classes from './components/Pages/Classes/Classes';
import AdvancedGym from './components/Pages/AdvancedGym/AdvancedGym';
import Payment from './components/Payment/Payment';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route  path="/pricing">
            <Pricing/>
            </Route>
          <Route  path="/gym">
            <Payment></Payment>
          </Route>
          <Route path="/purchase/:id">
            <Purchase/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
