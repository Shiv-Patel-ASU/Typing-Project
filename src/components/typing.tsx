import * as React from "react";
import { Component } from "react";
import "C:/Users/Shiv/Desktop/projects/typingapp/src/cssfiles/typing.css";
import Node from "./Node";
import { Container } from "react-bootstrap";

class Typing extends Component {
  state = {
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
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
