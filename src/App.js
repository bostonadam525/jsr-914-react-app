import React from "react";
//import Route, Routes, and NavLink from 'react-router-dom'
import { Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import NewsApp from './NewsApp';
import SentimentApp from "./pages/SentimentApp";
import './App.css';
import Navbar from './NavBar';

function App() {
    return(
        <section className="App">
            
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/About">About</Link>
          <br></br>
          <Link to="/NewsApp">NewsApp</Link>
          <br></br>
          <Link to="/SentimentApp">SentimentApp</Link>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/NewsApp" component={NewsApp} />
          <Route exact path="/SentimentApp" component={SentimentApp} />
        </Switch>
      </section>
    );
};

export default App;


