import React, { useState } from 'react'


// arrays
export const Cart = React.createContext()
export const Preview = React.createContext()

// functions
export const AddQuantity = React.createContext()
export const SubQuantity = React.createContext()
export const PreviewHandler = React.createContext()
export const AddToCartHandler = React.createContext()
export const DeleteListHandler = React.createContext()
export const ClearCartHandler = React.createContext()

// boolean
export const IsItemsLoaded = React.createContext()
export const IsPrevClicked = React.createContext()
export const ModalShow = React.createContext()

// integer
export const TotalPrice = React.createContext()


const GlobalState = ({ children }) => {
  // useState
  const [cart, setCart] = useState([])
  const [preview, setPreview] = useState([])
  const [isItemsLoaded, setIsItemsLoaded] = useState(false)
  const [isPrevClicked, setIsPrevClicked] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  // functions
  function addQuantityHandler(id, quantity, price) {
    const newQuantity = quantity + 1

    const updateList = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: newQuantity,
          total: newQuantity * item.price,
        }
      }
      return item
    })
    setCart([...updateList])
  }

  function subtractQuantityHandler(id, quantity) {
    const newQuantity = quantity - 1
    if (newQuantity < 1) {
      alert('Quantity must atleast be 1 or more')
    } else {
      const updateList = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.price,
          }
        }
        return item
      })
      setCart([...updateList])
    }
  }

  function deleteListHandler(id) {
    const filtered = cart.filter((item) => item.id !== id)
    setCart(filtered)
  }

  function clearCartHandler() {
    setCart([])
  }

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

  function previewHandler(title, price, description, img) {
    setIsPrevClicked(true)
    setPreview([
      { title: title, price: price, description: description, img: img },
    ])
  }

  return (
    <Cart.Provider value={[cart, setCart]}>
      <Preview.Provider value={[preview, setPreview]}>
        <AddQuantity.Provider value={addQuantityHandler}>
          <SubQuantity.Provider value={subtractQuantityHandler}>
            <PreviewHandler.Provider value={previewHandler}>
              <AddToCartHandler.Provider value={addToCartHandler}>
                <DeleteListHandler.Provider value={deleteListHandler}>
                  <ClearCartHandler.Provider value={clearCartHandler}>
                    <IsItemsLoaded.Provider value={[isItemsLoaded, setIsItemsLoaded]}>
                      <IsPrevClicked.Provider value={[isPrevClicked, setIsPrevClicked]}>
                        <ModalShow.Provider value={[modalShow, setModalShow]}>
                          <TotalPrice.Provider value={[totalPrice, setTotalPrice]}>
                            {children}
                          </TotalPrice.Provider>
                        </ModalShow.Provider>

                      </IsPrevClicked.Provider>

                    </IsItemsLoaded.Provider>

                  </ClearCartHandler.Provider>

                </DeleteListHandler.Provider>

              </AddToCartHandler.Provider>

            </PreviewHandler.Provider>

          </SubQuantity.Provider>

        </AddQuantity.Provider>

      </Preview.Provider>

    </Cart.Provider>
  )
}

export default GlobalState
