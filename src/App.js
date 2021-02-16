import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  )
}

export default App
