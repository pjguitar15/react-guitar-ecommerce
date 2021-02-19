import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  Cart,
  AddQuantity,
  SubQuantity,
  DeleteListHandler,
  ClearCartHandler,
} from './GlobalState'
const CartPage = () => {
  const addQuantityHandler = useContext(AddQuantity)
  const subtractQuantityHandler = useContext(SubQuantity)
  const deleteListHandler = useContext(DeleteListHandler)
  const clearCartHandler = useContext(ClearCartHandler)
  const [cart] = useContext(Cart)

  return (
    <div>
      <div className='cartHeaderBg text-center mb-5'>
        <Link to='/'>
          <span
            href='./Cart.jsx'
            className='py-5 toMainPage mx-5 text-secondary'
          >
            Back to Main Page (Shopping cart will not be cleared)
          </span>
        </Link>
        <h3 className='cartTitle text-center py-3 mx-auto mt-5'>Your Cart</h3>
      </div>

      {cart.length === 0 ? (
        <h1 className='text-center py-5'>Cart Empty :(</h1>
      ) : (
        <>
          {/* Cart Table */}
          <table className='table table-borderless mt-5 container'>
            <thead>
              <tr>
                <th scope='col' className='text-center'>
                  PRODUCTS
                </th>
                <th scope='col' className='text-center'>
                  NAME OF PRODUCT
                </th>
                <th scope='col' className='text-center'>
                  PRICE
                </th>
                <th scope='col' className='text-center'>
                  QUANTITY
                </th>
                <th scope='col' className='text-center'>
                  REMOVE
                </th>
                <th scope='col' className='text-center'>
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              {/* item list */}
              {cart.map((item, index) => (
                <tr key={index} scope='row' className='tableBodyItems'>
                  <td className='text-center' scope='row'>
                    <img style={{ height: '40px' }} src={item.img} />
                  </td>
                  <td className='text-center'>{item.title}</td>
                  <td className='text-center'>${item.price}</td>
                  <td className='text-center'>
                    <button
                      onClick={() =>
                        subtractQuantityHandler(
                          item.id,
                          item.quantity,
                          item.price
                        )
                      }
                      className='prevAddToCartBtn'
                    >
                      -
                    </button>
                    <span className='mx-3'>{item.quantity}</span>
                    <button
                      onClick={() =>
                        addQuantityHandler(
                          item.id,
                          item.quantity,
                          item.img,
                          item.price,
                          item.title,
                          item.description
                        )
                      }
                      className='prevAddToCartBtn'
                    >
                      +
                    </button>
                  </td>
                  <td className='text-center'>
                    {/* DELETES INVIDUAL ITEM */}
                    <i
                      onClick={() => {
                        deleteListHandler(item.id)
                      }}
                      className='deleteList fa fa-trash'
                    ></i>
                  </td>
                  <td className='text-center'>${item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Clear Cart and Checkout */}
          <div className='container mt-5 text-end p-5'>
            <button
              onClick={() => clearCartHandler()}
              className='btn btn-warning'
            >
              Clear Cart
            </button>

            <h4 className='my-3'>
              Subtotal: <span className='subTotalFont'>$FIX THIS</span>
            </h4>
            <h4 className='my-3'>
              Tax: <span className='subTotalFont'>$50</span>
            </h4>
            <h4 className='my-3'>
              Total: <span className='subTotalFont'>$0 for now</span>
            </h4>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage