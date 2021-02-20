import React, { useContext } from 'react'
import Navbar from './Navbar.jsx'
import GuitarProducts from './GuitarProducts.jsx'
import GuitarPreviewPage from './GuitarPreviewPage.jsx'
import { IsPrevClicked } from './GlobalState'
const Home = () => {
  const [isPrevClicked, setIsPrevClicked] = useContext(IsPrevClicked)
  return (
    <div>
      {/* is Preview Clicked Ternary condition */}
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
