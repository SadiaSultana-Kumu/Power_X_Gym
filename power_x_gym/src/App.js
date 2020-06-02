import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Pricing from './components/Pages/Pricing';
import Purchase from './components/Pages/Purchase';
import Classes from './components/Pages/Classes/Classes';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route  path="/pricing">
            <Pricing/>
          </Route>
          <Route path="/purchase/:id">
            <Purchase/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
