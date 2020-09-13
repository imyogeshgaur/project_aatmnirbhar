import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Products from "./Components/Product";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Menu from "./Components/Menu"

const App = () => {
  return (
    <>
    <Menu />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/product" component={Products} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
    </>
  );
};

export default App;
