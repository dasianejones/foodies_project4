import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Restaurants from "./components/Restaurants";
import SingleRestaurant from "./components/SingleRestaurant";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import Comments from "./components/Comments";
import SingleComment from "./components/SingleComment";
import Login from "./components/Login";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants" component={Restaurants} />
          <Route
            exact
            path="/restaurants/restaurants:sId"
            component={SingleRestaurant}
          />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/reviews/:reviewsId" component={SingleReview} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/comments/:commentsId" component={SingleComment} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
