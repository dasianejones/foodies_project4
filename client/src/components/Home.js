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
                  href="/reviews"
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
                  href="/restaurants"
                  style={{
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "14px"
                  }}
                >
                  Restaurants
                </Nav.Link>
                <Nav.Link
                  eventKey={2}
                  href="/reviews"
                  style={{
                    display: "inline-block",
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "14px"
                  }}
                >
                  Reviews
                </Nav.Link>
                <Nav.Link
                  href="/comments"
                  style={{
                    color: "#1E90FF",
                    fontWeight: "bolder",
                    fontSize: "14px"
                  }}
                >
                  Comments
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
                  Home Delivery
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
            <img
              src="https://hoodline.imgix.net/uploads/story/image/358267/Atlanta_Breakfast_Club_Photo_3_Enhanced.jpg?auto=format/300/200"
              alt="n/a"
            />
            <div className="content">
              <div className="title"></div>
              <div className="text">
                "Atlanta Breakfast Club provides it's guest with more than just
                Great Food and Great Service, but with a Great Experience. Our
                Breakfast and Lunch menu has been apart of an eating experience
                shared by guest all over the World."
              </div>
            </div>
          </div>

          <div className="foodies-card">
            <img
              src="https://bloximages.chicago2.vip.townnews.com/pressofatlanticcity.com/content/tncms/assets/v3/editorial/b/ef/bef1d8a7-c22f-51bf-90d2-6a559bc5c302/5bc55ff9416a7.image.jpg?/300/200"
              alt="n/a"
            />
            <div className="content">
              <div className="title"></div>
              <div className="text">
                "Sugar Factory is all about celebrating the sweetest moments in
                life. We want to create a fun, unforgettable dining experience
                for any age, at every location"
              </div>
            </div>
          </div>

          <div className="foodies-card">
            <img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1448390765%2Fmary-macs-tea-room-atlanta-at1115.jpg%3Fitok%3D2iXB_5So&c=sc&poi=face&q=85/300/200"
              alt="n/a"
            />
            <div className="content">
              <div className="title"></div>
              <div className="text">
                "Mary Mac's specializes in one thing.....True Southern
                Hospitality. From the outstanding service to the wonderful
                southern cuisine, this is the place to dine in Atlanta."
              </div>
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
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            paddingTop: "30px",
            color: "#1E90FF"
          }}
        >
          Hot New Businesses
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
            paddingTop: "30px"
          }}
        ></div>
        <div className="horizontal-card-container">
          <div className="foodies-card">
            <img
              src="https://hoodline.imgix.net/uploads/story/image/735466/ramen.jpg?auto=format/300/200"
              alt="n/a"
            />
            <div className="content">
              <div className="title"></div>
              <div className="text">
                "With two award winning pork and lobster ramen, E ramen expanded
                its horizon and created another full menu of other ramen bowls
                in the hopes of making this very classical comfort food
                accessible in the heart of midtown Atlanta."
              </div>
            </div>
          </div>

          <div className="foodies-card">
            <img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1448390765%2Fthe-optimist-atlanta-at1115.jpg%3Fitok%3Dt9q6u2aH&c=sc&poi=face&q=85/300/200"
              alt="n/a"
            />
            <div className="content">
              <div className="title"></div>
              <div className="text">
                "The Optimist brings a seaside fish camp experience to
                landlocked Atlantans. From fresh oysters from the Alabama coast
                to Maine sea scallops, guests enjoy high-quality, sustainable
                seafood from the country’s best suppliers."
              </div>
            </div>
          </div>

          <div className="foodies-card">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60/300/200"
              alt="n/a"
            />
            <div className="content">
              <div className="title"></div>
              <div className="text">
                "Slutty food is overindulgent, gooey, messy, most often sweet,
                and irresistible. You shouldn't want it, but you do. However,
                we're plant based...guilt free."
              </div>
            </div>
          </div>
          <div
            className="empty-div-2"
            style={{
              textAlign: "center",
              fontSize: "26px",
              fontWeight: "bold",
              paddingTop: "30px"
            }}
          ></div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            paddingTop: "30px",
            paddingBottom: "15px",
            color: "#1E90FF"
          }}
        >
          Browse Food By Category
        </div>
        <div className="flex-container-container">
          <div className="flex-container">
            <div className="foodies-card-2">
              <img
              // src="https://image.freepik.com/free-vector/delicious-mexican-food-cartoon_24640-29381.jpg/20/10"
              // alt="n/a"
              />
              <div className="content">
                <div className="title"></div>
                <div className="text">Mexican</div>
              </div>
            </div>{" "}
            <div className="foodies-card-2">
              {/* <img src="http://placekitten.com/300/200" alt="n/a" /> */}
              <div className="content">
                <div className="title"></div>
                <div className="text"> Italian</div>
              </div>
            </div>{" "}
            <div className="foodies-card-2">
              {/* <img src="http://placekitten.com/300/200" alt="n/a" /> */}
              <div className="content">
                <div className="title"></div>
                <div className="text"> Indian</div>
              </div>
            </div>{" "}
            <div className="foodies-card-2">
              {/* <img src="http://placekitten.com/300/200" alt="n/a" /> */}
              <div className="content">
                <div className="title"></div>
                <div className="text"> Cajun</div>
              </div>
            </div>{" "}
          </div>
          <div className="flex-container-2">
            <div className="foodies-card-2">
              {/* <img src="http://placekitten.com/300/200" alt="n/a" /> */}
              <div className="content">
                <div className="title"></div>
                <div className="text"> Soul</div>
              </div>
            </div>{" "}
            <div className="foodies-card-2">
              {/* <img src="http://placekitten.com/300/200" alt="n/a" /> */}
              <div className="content">
                <div className="title"></div>
                <div className="text"> Thai</div>
              </div>
            </div>{" "}
            <div className="foodies-card-2">
              {/* <img src="http://placekitten.com/300/200" alt="n/a" /> */}
              <div className="content">
                <div className="title"></div>
                <div className="text"> Greek</div>
              </div>
            </div>{" "}
            <div className="foodies-card-2">
              {/* <img src="http://placekitten.com/300/200" alt="n/a" /> */}
              <div className="content">
                <div className="title"></div>
                <div className="text"> More Categories</div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "#1E90FF" }}>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "#1E90FF" }}>
                  Discover
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: "#1E90FF" }}>
                  Foodies for Business Owners
                </a>
              </li>
            </ul>
            <span class="navbar-text" style={{ color: "#1E90FF" }}>
              Languages
            </span>
            <div style={{ paddingLeft: "15px" }}></div>
            <span class="navbar-text" style={{ color: "#1E90FF" }}>
              Country
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
