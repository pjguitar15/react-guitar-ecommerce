import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='d-none d-md-block text-md-start mb-3'>
        <Link to='/' className='text-decoration-none'>
          <span href='./Home.jsx' className='col-sm-12 mx-5 logo'>
            Philcob Guitar Shop
          </span>
        </Link>
      </div>
      <div className='Icons row container col-md-10 col-lg-5 mx-auto'>
        <div className='col-sm-12 col-md-4 text-center'>
          <Link to='/gearpage'>
            <span className='mx-auto'>GEAR</span>
          </Link>
        </div>
        <div className='col-sm-12 col-md-4 text-center'>
          <Link to='/custompage'>
            <span className='mx-auto'>CUSTOM</span>
          </Link>
        </div>
        <div className='col-sm-12 col-md-4 text-center'>
          <Link to='/cart'>
            <span href='./Cart.jsx' className='mx-auto'>
              CART
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
