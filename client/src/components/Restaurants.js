import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Restaurants extends Component {
  state = {
    restaurants: [],
    newRestaurants: {
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

  componentDidMount() {
    this.updateRestaurantsList();
  }

  updateRestaurantsList = () => {
    axios.get("/api/v1/restaurant/").then(res => {
      this.setState({ restaurants: res.data });
      console.log(this.state.restaurants);
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.newRestaurants[name] = value;
    this.setState(newState);
  };

  onSubmit = event => {
    event.preventDefault();

    axios.post("/api/v1/restaurant/", this.state.newRestaurants).then(() => {
      const newState = { ...this.state };
      newState.newRestaurants = {
        restaurant_name: "",
        restaurant_rating: "",
        restaurant_phone_number: "",
        restaurant_address: "",
        type_of_food: "",
        multiple_restaurant_locations: "",
        need_directions: ""
      };
      this.setState(newState);
      // update page data
      this.updateRestaurantsList();
    });
  };
  render() {
    return <div>Hi Restaurants! Im New Here!</div>;
  }
}
