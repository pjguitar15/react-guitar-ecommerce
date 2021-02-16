import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
const App = () => {
  const [cart, setCart] = useState([]);


  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home cart={cart} setCart={setCart} />
        </Route>
        <Route path="/cart">
          <Cart setCart={setCart} cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
