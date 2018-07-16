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
            description: "CodeTube is an app where the user can navigate through four of my favorite topics in web development. The user can filter by AWS, React, JavaScript or Coding Garden. The search results will appear on the next page as a card and then the user can click on a result to view the video on an image of an iMac. The main idea is to implement YouTube’s API in a React app. ",
            languages: ["HTML         ", "    CSS       ", "        JavaScript     ", "     React      ", "       Reactstrap      ", "      Now        ", "      You Tube API       ",  "      Fetch       ", "      Google Cloud Console"]
        },
        connect4 : {
            Title : "Connect4",
            img :"https://snag.gy/zk93QG.jpg",
            url: "https://q1projectnzgalvanize.firebaseapp.com/",
            description : "Connect Four is my favorite game that I recreated for my first project at Galvanize. I learned how to use DOM manipulation, vanilla JavaScript, and HTML&CSS. The hardest part for me was running JavaScript horizontally and diagonally while adding a class to each div.",
            languages : ["        HTML       ", "         CSS       ", "       JavaScript      ", "      JQuery   ", "        Firebase"]
        },
        webMap : {
            Title : "WebMap",
            img :"https://i.snag.gy/NAZDq3.jpg",
            url :"https://webmap-69d43.firebaseapp.com/",
            description: "Web Map is an app where the user can find restaurants, night clubs and bars near them. The search results will appear on the map as unique identifiers. The main idea is to work with Google Maps API and location. This project allowed me to explore how to use google maps and location in a web app.",
            languages: ["  HTML       ", "      CSS      ", "     JavaScript       ", "     Firebase     ", "      Google  Cloud Console APIs        ", "         Google Maps      ", "       Fetch     ", "     Bootstrap", ]
        },
        recepi : {
            Title : "Dev Recipe", 
            img :"https://i.snag.gy/CSHYrk.jpg",
            url :"https://recipeq2.firebaseapp.com/",
            description: "Dev Recipe is my first full sttack app where the user can add their favorite recipes. The user can input name, ingredients, prep time, country, gluten-free, and action with each new recipe. For this project I created the back end and the front end for the first time. The hardest part was figuring out how the back end works and how to open a new page when a button is clicked.",
            languages: ["  JavaScript        ", "    HTML     ", "      CSS     ", "    Bootstrap     ", "       AJAX     ", "      HEROKU    ","      Firebase"]
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