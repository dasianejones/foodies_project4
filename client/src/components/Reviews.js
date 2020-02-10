import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default class Reviews extends Component {
  state = {
    reviews: [],
    newReviews: {
      reviewer_name: "",
      restaurant_name: "",
      dish_rating: "",
      favorite_dish: "",
      customer_service_rating: "",
      dish_picture: "",
      restaurant: ""
    },
    redirect: false
  };

  componentDidMount() {
    this.updateReviewsList();
  }

  updateReviewsList = () => {
    axios.get("/api/v1/review/").then(res => {
      console.log("hey its me", res.data);
      this.setState({ reviews: res.data });
      console.log(this.state.reviews);
    });
  };

  onChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.newReviews[name] = value;
    this.setState(newState);
  };

  onSubmit = event => {
    event.preventDefault();

    axios.post("/api/v1/review/", this.state.newReviews).then(() => {
      const newState = { ...this.state };
      newState.newReviews = {
        reviewer_name: "",
        restaurant_name: "",
        dish_rating: "",
        favorite_dish: "",
        customer_service_rating: "",
        dish_picture: "",
        restaurant: ""
      };
      this.setState(newState);
      // update page data
      this.updateReviewsList();
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
              href="/login"
            >
              Login
            </Button>
            <Button variant="outline-primary" style={{ color: "#1E90FF" }}>
              Signup
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <h2 style={{ marginTop: "35px", marginBottom: "25px" }}>
          Want To Add A New Review?
        </h2>
        <form onSubmit={this.onSubmit}>
          <div className="input-list-box">
            <input
              className="form-control"
              type="text"
              name="reviewer_name"
              onChange={this.onChange}
              value={this.state.newReviews.reviewer_name}
              placeholder="Reviewer Name"
            />

            <input
              className="form-control"
              type="text"
              name="restaurant_name"
              onChange={this.onChange}
              value={this.state.newReviews.restaurant_name}
              placeholder="Restaurant Name"
            />

            <input
              className="form-control"
              type="text"
              name="dish_rating"
              onChange={this.onChange}
              value={this.state.newReviews.dish_rating}
              placeholder="Dish Rating"
            />

            <input
              className="form-control"
              type="text"
              name="favorite_dish"
              onChange={this.onChange}
              value={this.state.newReviews.favorite_dish}
              placeholder="Favorite Dish"
            />

            <input
              className="form-control"
              type="text"
              name="customer_service_rating"
              onChange={this.onChange}
              value={this.state.newReviews.customer_service_rating}
              placeholder="Customer Service Rating"
            />

            <input
              className="form-control"
              type="text"
              name="dish_picture"
              onChange={this.onChange}
              value={this.state.newReviews.dish_picture}
              placeholder="Dish Picture"
            />
            <input
              className="form-control"
              type="text"
              name="restaurant"
              onChange={this.onChange}
              value={this.state.newReviews.restaurant}
              placeholder="Restaurant Id #"
            />
          </div>

          <input
            style={{ marginTop: "10px" }}
            class="btn btn-secondary"
            type="submit"
            value="Add Review"
          />

          <div className="location-container"></div>
        </form>
        <h1>All Reviews</h1>
        {this.state.reviews.map(reviews => {
          console.log(reviews.id);

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
                    <Link to={`/reviews/${reviews.id}`}>
                      <Card.Title style={{ paddingTop: "10px" }}>
                        {reviews.reviewer_name}
                      </Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">
                      Restaurant Rating: {reviews.restaurant_name}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Dish Rating: {reviews.dish_rating}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Favorite Dish: {reviews.favorite_dish}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Customer Service Rating: {reviews.customer_service_rating}
                    </Card.Subtitle>
                    {/* <Card.Subtitle className="mb-2 text-muted">
                      Multiple Restaurant Locations?{" "}
                      {reviews.multiple_restaurant_locations}
                    </Card.Subtitle>
                    <Card.Text>{reviews.need_directions}</Card.Text>
                    <Card.Link style={{ color: "black" }} href="/location">
                      Need Directions?
                    </Card.Link> */}
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
