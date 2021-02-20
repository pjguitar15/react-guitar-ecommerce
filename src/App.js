import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import CartPage from './components/CartPage.jsx'
import GlobalState from './components/GlobalState'
const App = () => {

  return (

    <Router>
      <GlobalState>
        <Switch>
          <Route path='/' exact component={Home}>
          </Route>
          <Route path='/cart' component={CartPage}>
          </Route>
        </Switch>
      </GlobalState>
    </Router>
  )
}

export default App
