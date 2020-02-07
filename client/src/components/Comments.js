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

  componentDidMount() {
    this.updateReviewsList();
  }

  updateReviewsList = () => {
    axios.get("/api/v1/review/").then(res => {
      this.setState({ reviews: res.data });
      console.log(this.state.reviews);
    });
  };

  onChange = event => {
    const value = event.target.value;
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
    return <div>Hi Comments! Im New Here!</div>;
  }
}
