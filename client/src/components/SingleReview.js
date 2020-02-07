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

  updateSingleReview = () => {
    const url = `/api/v1/review/${this.props.match.params.reviewsId}`;
    axios.get(url).then(res => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    console.log("reviewsId", this.props.match.params.reviewsId);
    axios
      .get(`/api/v1/review/${this.props.match.params.reviewsId}`)
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ review: res.data });
      });
  }

  onSubmit = event => {
    event.preventDefault();
    const url = `/api/v1/review/${this.props.match.params.reviewsId}`;
    axios.put(url, this.state.review);
  };

  deleteSingleComment = () => {
    const url = `/api/v1/review/${this.props.match.params.reviewsId}`;
    axios.delete(url).then(() => {
      this.setState({ redirect: true });
    });
  };

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    const newState = { ...this.state };
    newState.review[name] = value;
    this.setState(newState);
  };
  render() {
    return <div>Hi SingleReview! Im New Here!</div>;
  }
}
