import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    const url = `/api/v1/comment/${this.props.match.params.commentsId}`;
    axios.get(url).then(res => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    console.log("commentsId", this.props.match.params.commentsId);
    axios
      .get(`/api/v1/comment/${this.props.match.params.commentsId}`)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ comment: res.data });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const url = `/api/v1/comment/${this.props.match.params.commentsId}`;
    axios.put(url, this.state.comment);
  };

  deleteSingleComment = () => {
    const url = `/api/v1/comment/${this.props.match.params.commentsId}`;
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
    return <div>Hi SingleComment! Im New Here!</div>;
  }
}
