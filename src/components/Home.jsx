import React, { useEffect, useContext } from 'react'
import Navbar from './Navbar.jsx'
import GuitarProducts from './GuitarProducts.jsx'
import GuitarPreviewPage from './GuitarPreviewPage.jsx'
import { IsPrevClicked } from './GlobalState'
const Home = () => {
  const [isPrevClicked] = useContext(IsPrevClicked)

  return (
    <div>
      {/* is Preview Clicked condition */}
      {!isPrevClicked ? (
        <div>
          <Navbar />

          <GuitarProducts />
        </div>
      ) : (
        <GuitarPreviewPage />
      )}
    </div>
  )
}

export default Home
