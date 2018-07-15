import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'




class NavbarClass extends Component {

 constructor() {
   super();
   this.handleScroll = this.handleScroll.bind(this);
 }

 componentDidMount() {
   window.addEventListener('scroll', this.handleScroll);

   
 };



 handleScroll(event) {
  //  add class to nav bar .sticky
  //  or background black to navbarClass
 };

  render(){
    return (
      <header className="headerClass">
        <div className="navbarClass" onScroll={this.handleScroll}   >
          <Row className="navigationRow">
            <Col><Link to="/">Projects</Link></Col>
            <Col><Link to="/">About</Link></Col>
            {/* <br/> */}
            <Col><Link to="/">Contact</Link></Col>
            <Col><Link to="/">Capabilities</Link></Col>
          </Row>
          {/* <Row>    
            <Col>
            <h4 className="mainTitle"> Nick Zamiatin </h4>
            </Col>
          </Row> */}
        
        </div>
      </header>
    )
  }
}

export default NavbarClass