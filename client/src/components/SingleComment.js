import React, { Component } from "react";

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
  render() {
    return <div>Hi SingleComment! Im New Here!</div>;
  }
}
