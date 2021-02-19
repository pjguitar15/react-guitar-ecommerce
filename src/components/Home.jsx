import React, { useState, useEffect } from 'react'
import Navbar from './Navbar.jsx'
import GuitarProducts from './GuitarProducts.jsx'
import GuitarPreviewPage from './GuitarPreviewPage.jsx'
const Home = ({ cart, setCart, setTotalPrice, totalPrice }) => {
  const [isPrevClicked, setIsPrevClicked] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [preview, setPreview] = useState([])

  function previewHandler(title, price, description, img) {
    setIsPrevClicked(true)
    setPreview([
      { title: title, price: price, description: description, img: img },
    ])
  }

  // Why is this handler on this page *facepalm*
  function addToCartHandler(title, price, img, description) {
    setModalShow(true)

    // Adds specific item to cart if item is not repeated
    const some = cart.some((item) => item.title === title)
    if (!some) {
      setCart([
        ...cart,
        {
          id: Date.now(),
          title: title,
          price: price,
          img: img,
          description: description,
          quantity: 1,
          total: price,
        },
      ])
    }
  }

  // This Updates the Total price
  useEffect(() => {
    // Code for adding value to price
    if (cart.length === 1) {
      console.log('length is === 1')
      setTotalPrice(cart[0].price)
    } else if (cart.length > 1) {
      const reduce = cart.reduce((acc, val) => {
        return { price: acc.price + val.price }
      })
      setTotalPrice(reduce.price)
      console.log(reduce.price)

      // console.log(`Total: ${computeTotal}`)
    }
  }, [cart])
  return (
    <div>
      {/* is Preview Clicked condition */}
      {!isPrevClicked ? (
        <div>
          <Navbar />

          <GuitarProducts
            setIsPrevClicked={setIsPrevClicked}
            previewHandler={previewHandler}
          />
        </div>
      ) : (
        <GuitarPreviewPage
          preview={preview}
          setIsPrevClicked={setIsPrevClicked}
          addToCartHandler={addToCartHandler}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
      )}
    </div>
  )
}

export default Home
