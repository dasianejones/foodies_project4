import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      this.setState({ comments: res.data });
      console.log(this.state.comments);
    });
  };

  onChange = event => {
    const value = event.target.value;
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
    return <div>Hi Comments! Im New Here!</div>;
  }
}
