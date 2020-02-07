import React, { Component } from "react";

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
      restaurant: ""
    },
    redirect: false
  };
  render() {
    return <div>Hi SingleReview! Im New Here!</div>;
  }
}
