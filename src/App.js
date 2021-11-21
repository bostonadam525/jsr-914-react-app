import React from "react";
//import Route, Routes, and NavLink from 'react-router-dom'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import NewsApp from './NewsApp';
import SentimentApp from "./pages/SentimentApp";
import './App.css';
import Navbar from './NavBar';

function App() {
    return(
        <section className="App">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/NewsApp">NewsApp</Link>
          <Link to="/SentimentApp">SentimentApp</Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/NewsApp" component={NewsApp} />
          <Route exact path="/SentimentApp" component={SentimentApp} />
        </Router>
      </section>
    );
};

export default App;


