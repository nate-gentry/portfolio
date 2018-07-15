import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';




class ProjecDes extends Component {

  constructor() {
    super();
    this.state = {
        capstone  : {
            Title : "Capstone",
            img :"",
            url :"",
            description : "",
            languages : []
        },
        reactNative : {
            Title : " React Native",
            img :"",
            url :"",
            description : "",
            languages : []
        },
        codeTube : {
             Title : "CodeTube",
             img: "https://i.snag.gy/yvgN3U.jpg",
            url :"https://codetubeproject.now.sh/",
            description: "CodeTube is an app where the user can find four favorite topics in web devlopment. The main idea works with youtube APIs. This project allowed me to explore how to use YouTube APIs in a react app. You can filter by AWS, React, JavaScript or Coding Garden. The search results will appear on the next page as a card and then you can click a result to see the video inside an iMac",
            languages: ["HTML", "CSS", "JavaScript", "React", "Reactstrap", "Now", "You Tube API", "Fetch", "Google Cloud Console"]
        },
        connect4 : {
            Title : "Connect4",
            img :"https://snag.gy/zk93QG.jpg",
            url: "https://q1projectnzgalvanize.firebaseapp.com/",
            description : "Connect four it's my favorite game with I want to create for my First Project at Galvanize. We learn how to use DOM manipulation and vanilla JavaScript and HTML&CSS. The hardest part for me its created how-to JS run on diagonal and horizontal and add each class for div. ",
            languages : ["HTML", "CSS", "JavaScript", "JQuery", "Firebase"]
        },
        webMap : {
            Title : "WebMap",
            img :"https://i.snag.gy/NAZDq3.jpg",
            url :"https://webmap-69d43.firebaseapp.com/",
            description: "Web map is an app where the user can find places they need near them.The main idea works with google maps, location and allowed me to explore how to use google maps and location in a web app.You can filter by restaurants, night clubs and bars.The search results will appear on the map as markers.",
            languages: ["HTML", "CSS", "JavaScript", "Firebase ", "Google  Cloud Console APIs", "Google Maps", "Fetch", "Bootstrap", ]
        },
        recepi : {
            Title : "Recepi",
            img :"https://i.snag.gy/CSHYrk.jpg",
            url :"https://recipeq2.firebaseapp.com/",
            description: "FulStack application where anyone can add his favorite recipes. The website has Name, Ingredients, Prep time, Country, Gluten-free, Action, with each of recipes On this project I created all backend and Front end on the first time and the hardest part was figuring out how the backend works and when the user press the button open new page.",
            languages: ["JavaScript", "HTML", "CSS", "Bootstrap", "AJAX", "HEROKU","Firebase"]
        }
    }
  }


render (){
    console.log(this.props.match.params.id)// id from projects 
    const result = this.state[this.props.match.params.id]
    return (
      <div className="finish">
        <div className="screen">
            <div className="wrapper">
            <img className="img" src={result.img}/> 
            <img   className="img1" src="http://pngimg.com/uploads/macbook/macbook_PNG55.png" />
            </div>
        </div>
        <Container>
            <Row sm="6" xs="12"> 
                <Col>
                    <h1>{result.Title}</h1></Col>
                <Col> 
                <h1><a href={result.url}>Visit webSite </a></h1>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col sm="12" xs="12">
                <p>{result.description}</p>
                </Col>
            </Row>
                <hr/>
                <Row sm="6" xs="12" >
                    <p>{result.languages}</p>
            </Row>
        </Container>
    </div>
     )
    }
}


export default ProjecDes