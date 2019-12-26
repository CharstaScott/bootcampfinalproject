import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, Login, Register, Signup } from "./containers/";

const App = () => (
  <Router>
    <React.Fragment>
      <Header brand="Movies Reviews" />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/signup" component={Signup} />
    </React.Fragment>
  </Router>
);

export default App;
