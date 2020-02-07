import React, { Component } from "react";

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
  render() {
    return <div>Hi Reviews! Im New Here!</div>;
  }
}
