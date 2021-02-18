import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='text-xl-start mb-3'>
        <Link to='/'>
          <span href='./Home.jsx' className='col-sm-12 mx-5 logo'>
            Philcob Guitar Shop
          </span>
        </Link>
      </div>
      <div className='Icons text-center'>
        <Link to='/gearpage'>
          <span className='mx-5'>GEAR</span>
        </Link>
        <Link to='/custompage'>
          <span className='mx-5'>CUSTOM</span>
        </Link>
        <Link to='/cart'>
          <span href='./Cart.jsx' className='mx-5'>
            CART
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
