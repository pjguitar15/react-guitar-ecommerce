import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from './GlobalState'
const Navbar = () => {
  const [cart] = useContext(Cart)
  return (
    <div className='Navbar'>
      <div className='text-center text-md-start mb-3'>
        <Link to='/' className='text-decoration-none'>
          <span href='./Home.jsx' className='col-sm-12 mx-5 logo'>
            Philcob Guitar Shop
          </span>
        </Link>
      </div>
      <div className='Icons row container col-md-10 col-lg-5 mx-auto'>
        <div className='col-sm-12 col-md-12 text-center'>
          <Link to='/cart'>
            <span href='./Cart.jsx' className='mx-auto'>
              CART ({cart.length})
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
