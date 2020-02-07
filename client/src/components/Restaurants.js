import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

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
    return (
      <div>
        <div>Hi Restaurants! Im New Here!</div>

        <form onSubmit={this.onSubmit}>
          <div className="input-list-box">
            <input
              className="form-control"
              type="text"
              name="picture"
              onChange={this.onChange}
              value={this.state.newRestaurants.restaurant_name}
              placeholder="Restaurant Name"
            />

            <input
              className="form-control"
              type="text"
              name="picture"
              onChange={this.onChange}
              value={this.state.newRestaurants.restaurant_phone_number}
              placeholder="Restaurant Phone Number"
            />

            <input
              className="form-control"
              type="text"
              name="picture"
              onChange={this.onChange}
              value={this.state.newRestaurants.restaurant_address}
              placeholder="Restaurant Address"
            />

            <input
              className="form-control"
              type="text"
              name="picture"
              onChange={this.onChange}
              value={this.state.newRestaurants.type_of_food}
              placeholder="Restaurant Food Category"
            />

            <input
              className="form-control"
              type="text"
              name="picture"
              onChange={this.onChange}
              value={this.state.newRestaurants.multiple_restaurant_locations}
              placeholder="More Than One Restaurant Location?"
            />

            <input
              className="form-control"
              type="text"
              name="picture"
              onChange={this.onChange}
              value={this.state.newRestaurants.need_directions}
              placeholder="Do You Need Directions To This Restaurant?"
            />

            <input
              class="btn btn-secondary"
              type="submit"
              value="Add Restaurant"
            />
          </div>
        </form>

        {this.state.restaurants.map(restaurants => {
          return (
            <div>
              <h1>Hi Restaurants! Im New Here!</h1>

              <div className="form" style={{ paddingTop: "25px" }}>
                <Card
                  style={{
                    width: "50%",
                    height: "40%"
                  }}
                >
                  <Card.Body>
                    <Link to={`/api/v1/restaurant/${restaurants._id}`}>
                      <Card.Title style={{ paddingTop: "10px" }}>
                        Restaurant Name {restaurants.restaurant_name}
                      </Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">
                      Restaurant Rating {restaurants.restaurant_rating}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Phone Number {restaurants.restaurant_phone_number}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Address {restaurants.restaurant_address}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Food Category {restaurants.type_of_food}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Multiple Restaurant Locations?{" "}
                      {restaurants.multiple_restaurant_locations}
                    </Card.Subtitle>
                    <Card.Text>{restaurants.need_directions}</Card.Text>
                    <Card.Link style={{ color: "black" }} href="#">
                      Need Directions?
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
