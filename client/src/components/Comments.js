import React, { Component } from "react";

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
  render() {
    return <div>Hi Comments! Im New Here!</div>;
  }
}
