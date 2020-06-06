import * as React from "react";
import { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../cssfiles/node.css";
import "tachyons";
import $ from "jquery";

//Global variables
let chars: string[];
let temp: singleNode[] = [];
let pause: number = 0;
let escape: boolean = false;
let wpm: number = 0;
let times: any;

export interface NodeProps {
  currentWord: string;
  finalstr: string;
  text: string;
}

export interface NodeState {
  allNodes: singleNode[];
  final: String;
  rawArray: String[];
  currentLetter: String;
  index: number;
  wordsPerMin: number;
  timerIsOn: boolean;
  timerTime: number;
  timerStart: number;
}

interface singleNode {
  letter: String;
  currentColor: number;
}

class Node extends Component<NodeProps, NodeState> {
  state: NodeState = {
    allNodes: temp,
    final: "",
    rawArray: [],
    currentLetter: "",
    index: 0,
    wordsPerMin: 0,
    timerIsOn: false,
    timerTime: 0,
    timerStart: 0,
  };

  changeColor = () => {
    chars = Array.from(this.props.text);
    var cell = this.state.allNodes.map((each, i) => {
      if (each.currentColor === 1) {
        if (i === this.state.index) {
          if (each.letter === " ") {
            return (
              <Col className="Error1 bg-lightest-blue pa2" md="auto" key={i}>
                {each.letter}
              </Col>
            );
          } else {
            return (
              <Col className="Error1 bg-lightest-blue pa1" md="auto" key={i}>
                {each.letter}
              </Col>
            );
          }
        } else {
          if (each.letter === " ") {
            return (
              <Col className="Error bg-lightest-blue pa2 bb" md="auto" key={i}>
                {each.letter}
              </Col>
            );
          } else {
            return (
              <Col className="Error bg-lightest-blue pa1 bb" md="auto" key={i}>
                {each.letter}
              </Col>
            );
          }
        }
      } else if (i === this.state.index) {
        if (each.letter === " ") {
          return (
            <Col className="Coll1 bg-lightest-blue pa2" md="auto" key={i}>
              {each.letter}
            </Col>
          );
        } else {
          return (
            <Col className="Coll1 bg-lightest-blue pa1" md="auto" key={i}>
              {each.letter}
            </Col>
          );
        }
      } else {
        if (each.letter === " ") {
          return (
            <Col className="Coll bg-lightest-blue pa2 bb" md="auto" key={i}>
              {each.letter}
            </Col>
          );
        } else {
          return (
            <Col className="Coll bg-lightest-blue pa1 bb" md="auto" key={i}>
              {each.letter}
            </Col>
          );
        }
      }
    });
    return cell;
  };

  gettingKeyPressed = (e: any) => {
    if (e.which === 27) {
      //If escape is hit, It will enable the start button again and set espace variable to true
      $(".startButton").prop("disabled", false);
      this.setState({ timerIsOn: false });
      clearInterval(times);
      escape = true;
    }
    if (escape === false) {
      if (e.keyCode === 32 && e.target === document.body) {
        //Prevents page from scrolling down with spacebar
        e.preventDefault();
      }

      const { index } = this.state;
      this.setState({ currentLetter: e.key }); //setting the current typed key value
      this.setState({ final: this.state.final.concat(e.key) });
      if (this.state.index < this.state.allNodes.length) {
        if (this.state.currentLetter === this.state.allNodes[index].letter) {
          //If the current letter typed matches the proper index in the array, it will increment the index (cursor)
          this.setState({ index: index + 1 });
        } else {
          let status: singleNode[] = Object.assign({}, this.state.allNodes); //If it does not match, it will set the currentColor to red, meaning the letter was typed in incorrectly.
          status[index].currentColor = 1; //currentColor 0 means it was typed corrently and 1 means it was typed incorrectly
          temp = status;
        }

        if (this.state.index >= 5) {
          wpm = Math.round(index / 5 / (this.state.timerTime / 60));
          this.setState({ wordsPerMin: wpm });
        }
      } else {
        this.reset();
      }
    }
  };

  start = () => {
    escape = false;
    $(".startButton").prop("disabled", true);
    this.setState({ rawArray: chars });
    console.log(this.state.allNodes);
    if (pause === 0) {
      chars.map((each, i) => {
        const nodetest = {
          letter: each,
          currentColor: 0,
        };
        temp.push(nodetest);
      });
    }
    pause = pause + 1;

    this.setState({ timerIsOn: true });
    times = setInterval(() => {
      if (this.state.timerIsOn === true) {
        this.setState({
          timerTime: this.state.timerTime + 1,
        });
      }
    }, 1000);
  };

  reset = () => {
    $(".resetButton").prop("disabled", true);
    temp = [];
    this.setState({ index: 0 });
    pause = 0;
    this.setState({ allNodes: temp });
    this.setState({ timerTime: 0 });
    clearInterval(times);
    this.setState({ wordsPerMin: 0 });
    this.start();
    $(".resetButton").prop("disabled", false);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.gettingKeyPressed);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.gettingKeyPressed);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center bg-lightest-blue">
          <Col className="text-center">
            <p>Timer: {this.state.timerTime}</p>
          </Col>
          <Col className="text-center">
            <p>Words per minute: {this.state.wordsPerMin}</p>
          </Col>
          <Col className="text-center">
            <p>Characters typed: {this.state.index}</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center ba bg-lightest-blue">
          {this.changeColor()}
        </Row>
        <Row>
          <br></br>
        </Row>
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col></Col>
          <Col className="text-center">
            <Button
              variant="outline-primary"
              className="startButton"
              onClick={this.start}
            >
              Start
            </Button>
          </Col>
          <Col className="text-center">
            <h6>Press Escape key to pause</h6>
          </Col>
          <Col className="text-center">
            <Button
              variant="outline-primary"
              className="resetButton"
              onClick={this.reset}
            >
              Reset
            </Button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Node;
