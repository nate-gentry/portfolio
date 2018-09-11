import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';


class Capstone extends Component {

  constructor() {
    super();
    this.state = {
      Title : "Focus Time",
      img :"https://snag.gy/pNYe5O.jpg",
      urlApple :"https://itunes.apple.com/us/app/focus-t/id1435215423?ls=1&mt=8",
      urlAndroind :"https://play.google.com/store/apps/details?id=com.unsureprogrammer.focustime",
      github : "https://github.com/NickZamiatin/Capstone",
      description: "Focus Time – is a time management application that: helps you accomplish more in a shorter period of time, low- ers your stress levels and helps you maintain your focus. By being able to improve your skills in time management, you'll be able to see improvement in other aspects of your life.",
      languages: ["  React Native       ", "      React      "," Redux" ,     "     JavaScript       ", "     Heroku     ", "      PostgreSQL  Knex        ", "         Express      ", "       Node     ", "     JWT and BYRYPT",]
    }
  }

render (){
  return (
    <div className="finish">
      <div className="screen">
          <div className="wrapper">
          <img className="img" src={this.state.img}/> 
          <img   className="img1" src="http://pngimg.com/uploads/macbook/macbook_PNG55.png" />
          </div>
      </div>
      <Container>
          <Row sm="6" xs="12"> 
              <Col>
                  <h1>{this.state.Title}</h1></Col>
              <Col> 
              <h3><a href={this.state.urlApple}>Visit Apple Store </a></h3> 
              <h3><a href={this.state.urlAndroind}>Visit Google Play Store </a></h3> 
              <h3><a href={this.state.github}>GitHub </a></h3>
             
              </Col>
          </Row>
          <hr/>
          <Row>
              <Col sm="12" xs="12">
              <p>{this.state.description}</p>
              </Col>
          </Row>
              <hr/>
              <Row sm="6" xs="12" >
                  <p>{this.state.languages}</p>
          </Row>
      </Container>
  </div>
   )
}
}


export default Capstone