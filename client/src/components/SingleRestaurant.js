import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class SingleRestaurant extends Component {
  state = {
    restaurant: {
      restaurant_name: "",
      restaurant_rating: "",
      restaurant_phone_number: "",
      restaurant_address: "",
      type_of_food: "",
      multiple_restaurant_locations: "",
      need_directions: ""
    },
    redirect: false
  };

  updateSingleRestaurant = () => {
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}/`;
    axios.get(url).then(res => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    console.log("restaurantsId", this.props.match.params.restaurantsId);
    axios
      .get(`/api/v1/restaurant/${this.props.match.params.restaurantsId}/`)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ restaurant: res.data });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}/`;
    axios.put(url, this.state.restaurant);
    this.setState({ redirect: true });
  };

  deleteSingleRestaurant = () => {
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}/`;
    axios.delete(url).then(() => {
      this.setState({ redirect: true });
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.restaurant[name] = value;
    this.setState(newState);
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

        {this.state.redirect === true ? <Redirect to="/restaurants" /> : null}
        <h1 style={{ paddingTop: "30px" }}>Change Restaurant Information</h1>

        <div style={{ paddingTop: "10px" }} className="form-container">
          <span style={{ paddingRight: "122px" }}></span>
          <span style={{ paddingRight: "129px" }}></span>
          <span style={{ paddingRight: "138px" }}></span>
          <span style={{ paddingRight: "120px" }}></span>
          <span style={{ paddingRight: "80px" }}></span>
          <span style={{ paddingRight: "80px" }}></span>
          <span style={{ paddingRight: "80px" }}></span>
        </div>

        <form onSubmit={this.onSubmit}>
          <div className="input-list-box">
            <input
              className="form-control"
              type="text"
              name="restaurant_name"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_name}
              placeholder="Restaurant Name"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_rating"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_rating}
              placeholder="Restaurant Rating"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_phone_number"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_phone_number}
              placeholder="Restaurant Phone Number"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_address"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_address}
              placeholder="Restaurant Address"
            />

            <input
              className="form-control"
              type="text"
              name="type_of_food"
              onChange={this.onChange}
              value={this.state.restaurant.type_of_food}
              placeholder="Food Category"
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
                value={this.state.restaurant.multiple_restaurant_locations}
                //   placeholder="Multiple Locations?"
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
                value={this.state.restaurant.need_directions}
                //   placeholder="Need Directions?"
              />
              <div style={{ marginTop: "10px" }} className="form-container">
                <button onClick={this.onSubmit}>Update</button>

                <button onClick={this.deleteSingleRestaurant}>Delete</button>
              </div>
            </div>
          </div>
        </form>

        <div></div>

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
