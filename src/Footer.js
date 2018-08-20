import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Footer extends Component {
render (){
    return (
        <div className="footer">
            <Row>
              <Col sm="6" className="">
              <h3><a href="https://www.linkedin.com/in/nick-zamiatin-17bb04156/">LinkedIn</a></h3>
              <h3><a href="https://github.com/NickZamiatin">GitHub</a></h3>
             <h3><a href="resume.pdf" download>Resume</a></h3>
              </Col>
   
            
            <Col  sm={{ size: 'auto', offset: 10 }} className="sing">© 2018 NZ Design</Col>
           
            </Row>
        </div>
    )
}
}


export default Footer