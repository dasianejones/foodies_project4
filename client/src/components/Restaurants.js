import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { MapContainer } from "../components/GoogleMaps";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export default class Restaurants extends Component {
  state = {
    restaurants: [],
    newRestaurants: {
      restaurant_name: "",
      restaurant_rating: "",
      restaurant_phone_number: "",
      restaurant_address: "",
      type_of_food: "",
      multiple_restaurant_locations: false,
      need_directions: false
    },
    redirect: false
  };

  componentDidMount() {
    this.updateRestaurantsList();
  }

  updateRestaurantsList = () => {
    axios.get("/api/v1/restaurant/").then(res => {
      console.log("hey its me", res.data);
      this.setState({ restaurants: res.data });
      console.log(this.state.restaurants);
    });
  };

  onChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.newRestaurants[name] = value;
    this.setState(newState);
  };

  //   GoogleApiWrapper = () =>
  //     ({
  //       apiKey: "AIzaSyD34hlDHSkuuHmIAqO4H5WQhYuNH7ygMEE"
  //     }(MapContainer));

  onSubmit = event => {
    event.preventDefault();

    axios.post("/api/v1/restaurant/", this.state.newRestaurants).then(() => {
      const newState = { ...this.state };
      newState.newRestaurants = {
        restaurant_name: "",
        restaurant_rating: "",
        restaurant_phone_number: "",
        restaurant_address: "",
        type_of_food: "",
        multiple_restaurant_locations: false,
        need_directions: false
      };
      this.setState(newState);
      // update page data
      this.updateRestaurantsList();
    });
  };
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" style={{ color: "white" }}>
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
        <Navbar style={{ height: "180px" }}>
          <Navbar.Brand href="#home">
            <h3>Add Your First Restaurant Today!</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button
              variant="outline-primary"
              style={{ color: "#1E90FF", marginLeft: "630px" }}
            >
              Login
            </Button>
            <Button variant="outline-primary" style={{ color: "#1E90FF" }}>
              Signup
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <h2 style={{ marginTop: "35px", marginBottom: "25px" }}>
          Want To Add A New Restaurant?
        </h2>
        <form onSubmit={this.onSubmit}>
          <div className="input-list-box">
            <input
              className="form-control"
              type="text"
              name="restaurant_name"
              onChange={this.onChange}
              value={this.state.newRestaurants.restaurant_name}
              placeholder="Restaurant Name"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_phone_number"
              onChange={this.onChange}
              value={this.state.newRestaurants.restaurant_phone_number}
              placeholder="Restaurant Phone Number"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_address"
              onChange={this.onChange}
              value={this.state.newRestaurants.restaurant_address}
              placeholder="Restaurant Address"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_rating"
              onChange={this.onChange}
              value={this.state.newRestaurants.restaurant_rating}
              placeholder="Restaurant Rating"
            />

            <input
              className="form-control"
              type="text"
              name="type_of_food"
              onChange={this.onChange}
              value={this.state.newRestaurants.type_of_food}
              placeholder="Restaurant Food Category"
            />
            <div className="input-group">
              <label
                htmlFor="multiple_restaurant_locations"
                style={{ marginTop: "5px" }}
              >
                "More Than One Restaurant Location?"
              </label>
              <input
                className="form-control"
                type="checkbox"
                name="multiple_restaurant_locations"
                onChange={this.onChange}
                value={this.state.newRestaurants.multiple_restaurant_locations}
                placeholder="More Than One Restaurant Location?"
              />
            </div>

            <div className="input-group">
              <label htmlFor="need_directions" style={{ marginTop: "5px" }}>
                "Do You Need Directions To This Restaurant?"
              </label>
              <input
                className="form-control"
                type="checkbox"
                name="need_directions"
                onChange={this.onChange}
                value={this.state.newRestaurants.need_directions}
                placeholder="Do You Need Directions To This Restaurant?"
              />
            </div>

            <input
              style={{ marginTop: "10px" }}
              class="btn btn-secondary"
              type="submit"
              value="Add Restaurant"
            />
          </div>
          <div className="location-container"></div>
        </form>
        <h1>All Restaurants</h1>;
        {this.state.restaurants.map(restaurants => {
          console.log(restaurants.id);

          return (
            <div>
              <div className="form">
                <Card
                  style={{
                    width: "50%",
                    height: "40%"
                  }}
                >
                  <Card.Body>
                    <Link to={`/restaurants/${restaurants.id}`}>
                      <Card.Title style={{ paddingTop: "10px" }}>
                        {restaurants.restaurant_name}
                      </Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">
                      Restaurant Rating: {restaurants.restaurant_rating}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Phone Number: {restaurants.restaurant_phone_number}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Address: {restaurants.restaurant_address}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Food Category: {restaurants.type_of_food}
                    </Card.Subtitle>
                    {/* <Card.Subtitle className="mb-2 text-muted">
                      Multiple Restaurant Locations?{" "}
                      {restaurants.multiple_restaurant_locations}
                    </Card.Subtitle> */}
                    <Card.Text>{restaurants.need_directions}</Card.Text>
                    <Card.Link style={{ color: "black" }} href="/location">
                      Need Directions?
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
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
