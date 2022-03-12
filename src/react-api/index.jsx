import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { Home, Sukses } from "./pages";

class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sukses" component={Sukses} exact />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default index;
