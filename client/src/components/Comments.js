import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default class Comments extends Component {
  state = {
    comments: [],
    newComments: {
      commenter_name: "",
      commenter_picture: "",
      comment_heading: "",
      commenter_location: "",
      content: "",
      review: ""
    },
    redirect: false
  };

  componentDidMount() {
    this.updateCommentsList();
  }

  updateCommentsList = () => {
    axios.get("/api/v1/comment/").then(res => {
      console.log("hey its me", res.data);
      this.setState({ comments: res.data });
      console.log(this.state.comments);
    });
  };

  onChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.newComments[name] = value;
    this.setState(newState);
  };
  onSubmit = event => {
    event.preventDefault();

    axios.post("/api/v1/comment/", this.state.newComments).then(() => {
      const newState = { ...this.state };
      newState.newComments = {
        commenter_name: "",
        commenter_picture: "",
        comment_heading: "",
        commenter_location: "",
        content: "",
        review: ""
      };
      this.setState(newState);
      // update page data
      this.updateCommentsList();
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
            <h3>Add Your First Comment Today!</h3>
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
          Want To Add A New Comment?
        </h2>
        <form onSubmit={this.onSubmit}>
          <div className="input-list-box">
            <input
              className="form-control"
              type="text"
              name="commenter_name"
              onChange={this.onChange}
              value={this.state.newComments.commenter_name}
              placeholder="Commenter Name"
            />

            <input
              className="form-control"
              type="text"
              name="commenter_picture"
              onChange={this.onChange}
              value={this.state.newComments.commenter_picture}
              placeholder="Commenter Name"
            />

            <input
              className="form-control"
              type="text"
              name="comment_heading"
              onChange={this.onChange}
              value={this.state.newComments.comment_heading}
              placeholder="Comment Heading"
            />

            <input
              className="form-control"
              type="text"
              name="commenter_location"
              onChange={this.onChange}
              value={this.state.newComments.commenter_location}
              placeholder="Commenter Location"
            />

            <input
              className="form-control"
              type="text"
              name="content"
              onChange={this.onChange}
              value={this.state.newComments.content}
              placeholder="Content"
            />

            <input
              className="form-control"
              type="text"
              name="review"
              onChange={this.onChange}
              value={this.state.newComments.review}
              placeholder="Review Id #"
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
        <h1>All Comments</h1>
        {this.state.comments.map(comments => {
          console.log(comments.id);

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
                    <Link to={`/comments/${comments.id}`}>
                      <Card.Title style={{ paddingTop: "10px" }}>
                        {comments.commenter_name}
                      </Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">
                      Commenter Picture: {comments.commenter_picture}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Comment Heading: {comments.comment_heading}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Commenter Location: {comments.commenter_location}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Content: {comments.content}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Review Id #: {comments.review}
                    </Card.Subtitle>
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
