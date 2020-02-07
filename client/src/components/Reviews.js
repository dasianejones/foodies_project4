import React, { Component } from "react";

export default class Reviews extends Component {
  state = {
    reviews: [],
    newReviews: {
      re_name: "",
      restaurant_rating: "",
      restaurant_phone_number: "",
      restaurant_address: "",
      type_of_food: "",
      multiple_restaurant_locations: "",
      need_directions: ""
    },
    redirect: false
  };
  render() {
    return <div>Hi Reviews! Im New Here!</div>;
  }
}
