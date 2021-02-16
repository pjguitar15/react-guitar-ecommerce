import React from 'react'
import { Link } from 'react-router-dom'
const Cart = () => {
  return (
    <div>
      <div className="cartHeaderBg text-center mb-5">
        <Link to="/">
          <a href="./Cart.jsx" className="py-5 toMainPage mx-5 text-secondary">Back to Main Page</a>
        </Link>
        <h3 className="cartTitle text-center py-3 mx-auto mt-5">Your Cart</h3>
      </div>


      {/* Cart Table */}

      <table class="table table-borderless mt-5 container">
        <thead>
          <tr>
            <th className="text-center">PRODUCTS</th>
            <th className="text-center">NAME OF PRODUCT</th>
            <th className="text-center">PRICE</th>
            <th className="text-center">QUANTITY</th>
            <th className="text-center">REMOVE</th>
            <th className="text-center">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {/* item list */}
          <tr className="tableBodyItems">
            <td className="text-center" scope="row">
              <img style={{ height: '40px' }} src="./img/guitar1.png" alt="" />
            </td>
            <td className="text-center">Gretch Guitar</td>
            <td className="text-center">$1,200</td>
            <td className="text-center">
              <button className="prevAddToCartBtn">-</button>
              <span className="mx-3">3</span>
              <button className="prevAddToCartBtn">+</button>
            </td>
            <td className="text-center"><i className="deleteList fa fa-trash"></i></td>
            <td className="text-center">$1,200</td>
          </tr>




        </tbody>

      </table>
      <div className="container text-end p-5">
        <button className="btn btn-warning">Clear Cart</button>
        <h4 className="my-3">Subtotal: <span className="subTotalFont">$1,200</span></h4>
        <h4 className="my-3">Tax: <span className="subTotalFont">$50</span></h4>
        <h4 className="my-3">Total: <span className="subTotalFont">$1,250</span></h4>
      </div>


    </div>
  )
}

export default Cart
