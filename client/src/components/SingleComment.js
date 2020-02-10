import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class SingleComment extends Component {
  state = {
    comment: [],
    newComment: {
      commenter_name: "",
      commenter_picture: "",
      comment_heading: "",
      commenter_location: "",
      content: "",
      review: ""
    },
    redirect: false
  };

  updateSingleComment = () => {
    const url = `/api/v1/comment/${this.props.match.params.commentsId}/`;
    axios.get(url).then(res => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    console.log("commentsId", this.props.match.params.commentsId);
    axios
      .get(`/api/v1/comment/${this.props.match.params.commentsId}/`)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ comment: res.data });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const url = `/api/v1/comment/${this.props.match.params.commentsId}/`;
    axios.put(url, this.state.comment);
    this.setState({ redirect: true });
  };

  deleteSingleComment = () => {
    const url = `/api/v1/comment/${this.props.match.params.commentsId}/`;
    axios.delete(url).then(() => {
      this.setState({ redirect: true });
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.comment[name] = value;
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

        {this.state.redirect === true ? <Redirect to="/comments" /> : null}
        <h1 style={{ paddingTop: "30px" }}>Change Comment Information</h1>

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
              name="commenter_name"
              onChange={this.onChange}
              value={this.state.comment.commenter_name}
              placeholder="Commenter Name"
            />

            <input
              className="form-control"
              type="text"
              name="commenter_picture"
              onChange={this.onChange}
              value={this.state.comment.commenter_picture}
              placeholder="Commenter Picture"
            />

            <input
              className="form-control"
              type="text"
              name="comment_heading"
              onChange={this.onChange}
              value={this.state.comment.comment_heading}
              placeholder="Comment Heading"
            />

            <input
              className="form-control"
              type="text"
              name="Commenter Location"
              onChange={this.onChange}
              value={this.state.comment.commenter_location}
              placeholder="Commenter Location"
            />

            <input
              className="form-control"
              type="text"
              name="content"
              onChange={this.onChange}
              value={this.state.comment.content}
              placeholder="Content"
            />

            <input
              className="form-control"
              type="text"
              name="review"
              onChange={this.onChange}
              value={this.state.comment.review}
              placeholder="Review Id #"
            />
            <input
              className="form-control"
              type="text"
              name="restaurant"
              onChange={this.onChange}
              value={this.state.comment.restaurant}
              //   placeholder="Need Directions?"
            />
            <div style={{ marginTop: "10px" }} className="form-container">
              <button onClick={this.onSubmit}>Update</button>

              <button onClick={this.deleteSingleReview}>Delete</button>
            </div>
          </div>
        </form>

        <div className="size-container" style={{ height: "200px" }}></div>

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
