import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to='/'>
        <a href="./Home.jsx" style={{ position: 'absolute' }} className="mx-5 logo">Philcob Guitar Shop</a>
      </Link>
      <div className="Icons text-center">
        <a href="#" className="mx-5">GEAR</a>
        <a href="#" className="mx-5">CUSTOM</a>
        <Link to='/cart'>
          <a href="./Cart.jsx" className="mx-5">CART</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
