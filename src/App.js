import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx'
import GearPage from './components/GearPage.jsx'
import CustomPage from './components/CustomPage.jsx'
const App = () => {
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home
            cart={cart}
            setCart={setCart}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        </Route>
        <Route path='/cart'>
          <Cart
            setCart={setCart}
            cart={cart}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
          />
        </Route>
        <Route path='/gearpage'>
          <GearPage />
        </Route>
        <Route path='/custompage'>
          <CustomPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
