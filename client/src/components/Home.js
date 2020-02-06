import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>
                Let Your Tummies Roar!
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" style={{ color: "white" }}>
                Seafood
              </Nav.Link>
              <Nav.Link href="#deets" style={{ color: "white" }}>
                Mexican
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" style={{ color: "white" }}>
                All American
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="home-jumbotron-container">
          <Jumbotron
            fluid
            style={{
              height: "500px",
              backgroundImage:
                "https://i.pinimg.com/originals/30/7e/81/307e8154e87ffc5d2f823cd50b174dee.gif"
            }}
          >
            <Container>
              <Nav>
                <Nav.Link
                  href="#deets"
                  style={{
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "19px"
                  }}
                >
                  Chat
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "19px"
                  }}
                >
                  Events
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  style={{
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "19px"
                  }}
                >
                  Write A Review
                </Nav.Link>
                <ButtonToolbar>
                  <Button
                    variant="outline-primary"
                    style={{ color: "#1E90FF", marginLeft: "630px" }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline-primary"
                    style={{ color: "#1E90FF" }}
                  >
                    Signup
                  </Button>
                </ButtonToolbar>
              </Nav>
              <Form inline>
                <FormControl
                  style={{
                    margin: "center",
                    marginTop: "150px",
                    width: "45%"
                  }}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <FormControl
                  style={{ margin: "center", marginTop: "150px", width: "45%" }}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button
                  style={{ margin: "center", marginTop: "150px" }}
                  variant="outline-secondary"
                >
                  Search
                </Button>
              </Form>
              <Nav className="home-bottom-search-tabs">
                <Nav.Link
                  href="#deets"
                  style={{
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "14px"
                  }}
                >
                  Chat
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  style={{
                    display: "inline-block",
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "14px"
                  }}
                >
                  Write A Review
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "14px"
                  }}
                >
                  Events
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="#memes"
                  style={{
                    display: "inline-block",
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "14px"
                  }}
                >
                  Write A Review
                </Nav.Link>
              </Nav>
            </Container>
          </Jumbotron>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            paddingTop: "30px"
          }}
        >
          Find The Best Restaurants In Town
        </div>
        <div className="horizontal-card-container">
          <div className="foodies-card">
            <img src="http://placekitten.com/300/200" alt="n/a" />
            <div className="content">
              <div className="title"></div>
              <div className="text" /> Some quick example text to build on the
              card title and make up the bulk of the card's content.
            </div>
          </div>

          <div className="foodies-card">
            <img src="http://placekitten.com/300/200" alt="n/a" />
            <div className="content">
              <div className="title"></div>
              <div className="text" /> Some quick example text to build on the
              card title and make up the bulk of the card's content.
            </div>
          </div>

          <div className="foodies-card">
            <img src="http://placekitten.com/300/200" alt="n/a" />
            <div className="content">
              <div className="title"></div>
              <div className="text" /> Some quick example text to build on the
              card title and make up the bulk of the card's content.
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "bold",
            paddingTop: "30px"
          }}
        >
          Foodies Atlanta
        </div>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              San Francisco
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              New York
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              San Jose
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Los Angeles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Chicago
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Palo Alto
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Miami
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div
          className="home-bottom-border"
          style={{
            borderBottom: "2px solid #ccc ",
            width: "80%",
            marginLeft: "140px",
            paddingTop: "10px"
          }}
        ></div>
      </div>
    );
  }
}
