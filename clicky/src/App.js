import React, { Component } from 'react';
import Villains from "./components/Villains";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import { Container, Row, Col } from "./components/Grid";
import villainsArray from "./villains.json";
import './App.css';

class App extends Component {

  state = {
    villainsArray,
    currentScore: 0,
    bestScore: 0,
    message: " "
  };

  handleClick = id => {

    const villainsArray = this.state.villainsArray;

    const clickedVillain = villainsArray.filter(villain => villain.id === id);

    if (clickedVillain[0].clicked) {

      villainsArray.forEach(villain => {
        villain.clicked = false;
      });

      this.setState({ currentScore: 0 });
      this.setState({ villainsArray });
      this.setState({ message: "Oops! Try again!" })

    } else if (this.state.currentScore < 7) {

      clickedVillain[0].clicked = true;

      this.state.currentScore += 1;

      if (this.state.currentScore > this.state.bestScore) {
        this.setState({ bestScore: this.state.currentScore });
      }

      villainsArray.sort((a, b) => { return 0.5 - Math.random() });

      this.setState({ villainsArray: villainsArray });
      this.setState({ currentScore: this.state.currentScore });
      this.setState({ message: "Keep going!" })

    } else {

      clickedVillain[0].clicked = true;

      this.setState({ currentScore: 0 });

      this.setState({ message: "WOW!!! You win! Let's see if you can do it again!" });
      this.setState({ bestScore: 8 });

      villainsArray.forEach(villain => {
        villain.clicked = false;

      });

      villainsArray.sort(function (a, b) { return 0.5 - Math.random() });

      this.setState({ villainsArray: villainsArray });
    }
  };

  render() {
    return (
      <Wrapper>
        <Nav
          score={this.state.currentScore}
          topScore={this.state.bestScore}
        />

        <Jumbotron>
          {this.state.message}
        </Jumbotron>

        <Container>
          <Row>
            {this.state.villainsArray.map(villain => (
              <Col size="md-3 sm-6">
                <Villains
                  key={villain.id}
                  handleClick={this.handleClick}
                  id={villain.id}
                  image={villain.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
        {/* < Container>
          <Row>
            <Col size="md-12">
            </Col>
          </Row>
        </Container> */}
           <Footer>
          </Footer>   
              
        
      </Wrapper>
    );
  }
}


export default App;
