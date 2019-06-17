import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'




class NavbarClass extends Component {

 



  render(){
    return (
      <header className="headerClass">
        <div className="navbarClass"  >
          <Row className="navigationRow" style={{backgroundColor : this.props.isBlack ? "black" : "transparent"}} >
            <Col><Link to="/">Projects</Link></Col>
            <Col><h4>this my personal web site where you ca find more information about me</h4> </Col>

          </Row>
     
        </div>
      </header>
    )
  }
}

export default NavbarClass