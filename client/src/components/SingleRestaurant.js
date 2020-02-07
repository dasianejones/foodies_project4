import React, { Component } from "react";

export default class SingleRestaurant extends Component {
  state = {
    restaurant: [],
    newRestaurant: {
      restaurant_name: "",
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
    return <div>Hi SingleRestaurant! Im New Here!</div>;
  }
}
