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
            github : "",
            description : "Coming  Soon ",
            languages : []
        },
        anteup : {
            Title : " Ante-Up",
            img :"https://snag.gy/ReAtSl.jpg",
            url :"https://anteup-app.firebaseapp.com/",
            github : "https://github.com/3-Accents",
            description : "AnteUp is an FullStack application that enables friends to bet against each other for fun and bragging rights! Bets don’t have to be about money and can be something like: loser must die their hair blue for a week. Users are able to log in via Facebook, send bet requests to each other, view the status of their bets and vote on the winner. ",
            languages : ["React            ", "            Node            ", "         Express          ", "          HTML          ", "        CSS         ", "            Facebook for  Developers                      ", "          Ant Design           "]
        },
        codeTube : {
             Title : "CodeTube",
             img: "https://i.snag.gy/yvgN3U.jpg",
            url :"https://build-hvrfpkmlec.now.sh/",
            github : "https://github.com/NickZamiatin/CodeTube-React-Project",
            description: "CodeTube is an app where the user can navigate through four of my favorite topics in web development. The user can filter by AWS, React, JavaScript or Coding Garden. The search results will appear on the next page as a card and then the user can click on a result to view the video on an image of an iMac. The main idea is to implement YouTube’s API in a React app. ",
            languages: ["HTML         ", "    CSS       ", "        JavaScript     ", "     React      ", "       Reactstrap      ", "      Now        ", "      You Tube API       ",  "      Fetch       ", "      Google Cloud Console"]
        },
        connect4 : {
            Title : "Connect4",
            img :"https://snag.gy/zk93QG.jpg",
            url: "https://q1project-ykdjnrceah.now.sh/",
            github: "https://github.com/NickZamiatin/Q1project",
            description : "Connect Four is my favorite game that I recreated for my first project at Galvanize. I learned how to use DOM manipulation, vanilla JavaScript, and HTML&CSS. The hardest part for me was running JavaScript horizontally and diagonally while adding a class to each div.",
            languages : ["        HTML       ", "         CSS       ", "       JavaScript      ", "      JQuery   ", "        Firebase"]
        },
        webMap : {
            Title : "WebMap",
            img :"https://i.snag.gy/NAZDq3.jpg",
            url :"https://webmap-69d43.firebaseapp.com/",
            github : "https://github.com/NickZamiatin/webMap-project",
            description: "Web Map is an app where the user can find restaurants, night clubs and bars near them. The search results will appear on the map as unique identifiers. The main idea is to work with Google Maps API and location. This project allowed me to explore how to use google maps and location in a web app.",
            languages: ["  HTML       ", "      CSS      ", "     JavaScript       ", "     Firebase     ", "      Google  Cloud Console APIs        ", "         Google Maps      ", "       Fetch     ", "     Bootstrap", ]
        },
        recepi : {
            Title : "Dev Recipe", 
            img :"https://i.snag.gy/CSHYrk.jpg",
            url :"https://q2project-front-jqujccpyrr.now.sh/",
            github: "https://github.com/NickZamiatin/Q2Project-back",
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
                <h3><a href={result.url}>Visit webSite </a></h3> 
                <h3><a href={result.github}>GitHub </a></h3>
               
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