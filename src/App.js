import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage-component";
import ShopPage from './pages/shop/shop.component'

const HatsPage = () => (
  <div>
    <h1>Hats PAge</h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
