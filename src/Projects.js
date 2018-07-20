import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'


class Projects extends Component {
render (){

    return (
        <div className="projects">
        
         <Row>
          <Col sm="6" xs="12" className="project6" id="Capstone"><h1><Link to="/capstone">Capstone</Link></h1></Col>
          <Col sm="6" xs="12"  className="project6">
              <Row>
                <Col  xs="12" className="project6" id="Reactnative"><h1><Link to="/webMap">WebMap</Link> </h1></Col>
                <Col  xs="12" className="project3" id="CodeTube"><h1><Link to="/codeTube">CodeTube</Link></h1></Col>
              </Row>
          </Col>
        </Row>

        <Row>
          <Col sm="6" xs="12"  className="project6">
              <Row>          
                <Col  xs="12" className="project3" id="WebMap"><h1><Link to="/anteup">Ante-Up</Link></h1></Col>
                <Col  xs="12" className="project6" id="Connect4"><h1><Link to="/connect4">Connect4</Link></h1></Col>
              </Row>
          </Col>
          <Col sm="6" xs="12" className="project6" id="Recepi"><h1><Link to="/recepi">Dev Recipe</Link></h1></Col>
        </Row>

      
     </div>
    )
}
}


export default Projects