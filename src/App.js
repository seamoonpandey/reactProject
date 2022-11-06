import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import MyBuilds from './components/MyBuilds';
import myinfo from './components/MyInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>

      <div>
        <SocialMedia />
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/MyBuilds" component={MyBuilds} />
            <Route path="/myinfo" component={myinfo} />
          </Switch>
        </Router>
        <Footer />
      </div>

    </>
  )
}


export default App

