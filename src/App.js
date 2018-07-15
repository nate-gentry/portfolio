import React, { Component } from 'react';
import './App.css';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';
import NavbarClass from './NavbarClass';
import { Container, Row, Col } from 'reactstrap';
import {Switch , Route} from "react-router-dom"
import ProjecDes from "./ProjecDes";




class App extends Component {

  
  render() {
    return (
      <div className="App">
         <div className="backgrounBody">
         <div className="spacer"></div>
          <h4 className="mainTitle"> Nick Zamiatin </h4>
          <Container>
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/:id' component={ProjecDes}/>
            </Switch>
          </Container>
          <Footer />
          <NavbarClass />
        </div>
      </div>
    );
  }
}

export default App;


// https: //codetubeproject.now.sh/video/GyCD--1v8w0
