import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class SingleRestaurant extends Component {
  state = {
    restaurant: {
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
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}/`;
    axios.get(url).then(res => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    console.log("restaurantsId", this.props.match.params.restaurantsId);
    axios
      .get(`/api/v1/restaurant/${this.props.match.params.restaurantsId}/`)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ restaurant: res.data });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}/`;
    axios.put(url, this.state.restaurant);
    this.setState({ redirect: true });
  };

  deleteSingleRestaurant = () => {
    const url = `/api/v1/restaurant/${this.props.match.params.restaurantsId}/`;
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
    return (
      <div>
        <h1>hy</h1>
        {this.state.redirect === true ? <Redirect to="/restaurants" /> : null}
        <h1 style={{ paddingTop: "30px" }}>Change Restaurant Information</h1>

        <div style={{ paddingTop: "10px" }} className="form-container">
          <span style={{ paddingRight: "122px" }}>Name:</span>
          <span style={{ paddingRight: "129px" }}>Rating:</span>
          <span style={{ paddingRight: "138px" }}>Number:</span>
          <span style={{ paddingRight: "120px" }}>Address:</span>
          <span style={{ paddingRight: "80px" }}>Food Type:</span>
          <span style={{ paddingRight: "80px" }}>Multiple Locations?</span>
          <span style={{ paddingRight: "80px" }}>Need Directions?</span>
        </div>

        <div className="form-container">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="restaurant_name"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_name}
              placeholder="Restaurant Name"
            />

            <input
              type="text"
              name="restaurant_rating"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_rating}
              //   placeholder="Restaurant Rating"
            />

            <input
              type="text"
              name="restaurant_phone_number"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_phone_number}
              //   placeholder="Restaurant Phone Number"
            />

            <input
              type="text"
              name="restaurant_address"
              onChange={this.onChange}
              value={this.state.restaurant.restaurant_address}
              //   placeholder="Restaurant Address"
            />

            <input
              type="text"
              name="type_of_food"
              onChange={this.onChange}
              value={this.state.restaurant.type_of_food}
              //   placeholder="Food Category"
            />

            <input
              type="checkbox"
              name="multiple_restaurant_locations"
              onChange={this.onChange}
              value={this.state.restaurant.multiple_restaurant_locations}
              //   placeholder="Multiple Locations?"
            />

            <input
              type="checkbox"
              name="need_directions"
              onChange={this.onChange}
              value={this.state.restaurant.need_directions}
              //   placeholder="Need Directions?"
            />
          </form>
        </div>

        <div style={{ paddingTop: "10px" }} className="form-container">
          <button onClick={this.onSubmit}>Update</button>

          <button onClick={this.deleteSingleRestaurant}>Delete</button>
        </div>
      </div>
    );
  }
}
