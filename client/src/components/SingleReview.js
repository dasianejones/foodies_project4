import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class SingleReview extends Component {
  state = {
    review: [],
    newReview: {
      reviewer_name: "",
      restaurant_name: "",
      dish_rating: "",
      favorite_dish: "",
      customer_service_rating: "",
      dish_picture: "",
      review: ""
    },
    redirect: false
  };

  updateSingleReview = () => {
    const url = `/api/v1/review/${this.props.match.params.reviewsId}/`;
    axios.get(url).then(res => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    console.log("reviewsId", this.props.match.params.reviewsId);
    axios
      .get(`/api/v1/review/${this.props.match.params.reviewsId}/`)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ review: res.data });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const url = `/api/v1/review/${this.props.match.params.reviewsId}/`;
    axios.put(url, this.state.review);
    this.setState({ redirect: true });
  };

  deleteSingleReview = () => {
    const url = `/api/v1/review/${this.props.match.params.reviewsId}/`;
    axios.delete(url).then(() => {
      this.setState({ redirect: true });
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.review[name] = value;
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

        {this.state.redirect === true ? <Redirect to="/reviews" /> : null}
        <h1 style={{ paddingTop: "30px" }}>Change Review Information</h1>

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
              name="reviewer_name"
              onChange={this.onChange}
              value={this.state.review.reviewer_name}
              placeholder="Reviewer Name"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_name"
              onChange={this.onChange}
              value={this.state.review.restaurant_name}
              placeholder="Restaurant Name"
            />

            <input
              className="form-control"
              type="text"
              name="dish_rating"
              onChange={this.onChange}
              value={this.state.review.dish_rating}
              placeholder="Dish Rating"
            />

            <input
              className="form-control"
              type="text"
              name="favorite_dish"
              onChange={this.onChange}
              value={this.state.review.favorite_dish}
              placeholder="Favorite Dish"
            />

            <input
              className="form-control"
              type="text"
              name="customer_service_rating"
              onChange={this.onChange}
              value={this.state.review.customer_service_rating}
              placeholder="Customer Service Rating"
            />

            <input
              className="form-control"
              type="text"
              name="dish_picture"
              onChange={this.onChange}
              value={this.state.review.dish_picture}
              placeholder="Dish Picture"
            />
            <input
              className="form-control"
              type="text"
              name="restaurant"
              onChange={this.onChange}
              value={this.state.review.restaurant}
              //   placeholder="Need Directions?"
            />
          </div>

          <div style={{ marginTop: "10px" }} className="form-container">
            <button onClick={this.onSubmit}>Update</button>

            <button onClick={this.deleteSingleReview}>Delete</button>
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
