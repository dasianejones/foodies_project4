import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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

  updateSingleRestaurant = () => {
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}`;
    axios.get(url).then(res => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    console.log("restaurantsId", this.props.match.params.restaurantsId);
    axios
      .get(`/api/v1/restaurant/${this.props.match.params.restaurantsId}`)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ restaurant: res.data });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}`;
    axios.put(url, this.state.restaurant);
  };

  deleteSingleComment = () => {
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}`;
    axios.delete(url).then(() => {
      this.setState({ redirect: true });
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.restaurant[name] = value;
    this.setState(newState);
  };
  render() {
    return <div>Hi SingleRestaurant! Im New Here!</div>;
  }
}
