import * as React from "react";
import { Component } from "react";
import "C:/Users/Shiv/Desktop/projects/typingapp/src/cssfiles/typing.css";
import Node from "./Node";
import { Container } from "react-bootstrap";

class Typing extends Component {
  state = {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    currentWord: "",
    finalstr: "",
  };

  render() {
    const { currentWord, finalstr, text } = this.state;
    return (
      <div>
        <Container fluid className="text-center bg-lightest-blue">
          <br></br>
          <h4>Welcome to typing speed practice website!</h4>
          <br className=" bg-lightest-blue"></br>
        </Container>
        <br></br>
        <Node currentWord={currentWord} finalstr={finalstr} text={text} />
      </div>
    );
  }
}

export default Typing;
