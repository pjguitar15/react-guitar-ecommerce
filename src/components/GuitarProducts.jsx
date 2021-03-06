import React, { useState, useEffect, useContext } from 'react'
import { PreviewHandler, IsItemsLoaded } from './GlobalState'
import firebase from '../firebase'
const GuitarProducts = () => {
  const previewHandler = useContext(PreviewHandler)
  const [isItemsLoaded, setIsItemsLoaded] = useContext(IsItemsLoaded)
  const [data, setData] = useState([])

  // request data from guitar_items collection (firebase)
  const ref = firebase.firestore().collection('guitar_items') // to determine which collection

  // setting Data from firebase
  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((item) => {
        items.push(item.data())
      })
      setData(items)
      setIsItemsLoaded(true)
    })
  }

  // gets the data from Firebase
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {!isItemsLoaded ? (
        <div
          className='spinner-border'
          style={{ width: '100px', height: '100px' }}
          role='status'
        >
          <span className='sr-only'></span>
        </div>
      ) : (
        <>
          <h2 className='ourProducts py-5 text-center'>Our Products</h2>

          <div className='row'>
            {/* individual item */}
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  previewHandler(
                    item.title,
                    item.price,
                    item.description,
                    item.img
                  )
                }
                className='itemContainer container mb-4 col-md-6 col-lg-4 col-xl-4'
              >
                <div className='card shadow-sm p-4'>
                  <img className='p-2' src={item.img} alt='' />
                  <div className='body text-light p-2 mt-4'>
                    <h5>{item.title}</h5>
                    <p
                      style={{
                        fontFamily: 'Open Sans',
                        fontWeight: '100',
                        fontSize: '14px',
                      }}
                      className='text-light'
                    >
                      {item.description}
                    </p>
                    <button className='mt-3 addToCardBtn'>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default GuitarProducts
