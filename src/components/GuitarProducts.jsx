import React, { useEffect, useState } from "react";
import Data from "../Data";
const GuitarProducts = ({ addToCartHandler }) => {
  const [isItemsLoaded, setIsItemsLoaded] = useState(false);
  const data = Data;
  useEffect(() => {
    setTimeout(() => {
      setIsItemsLoaded(true);
    }, 500);
  }, []);
  return (
    <div>
      <h2 className="ourProducts py-5 text-center">Our Products</h2>

      <div className="container-fluid row">
        {/* individual item */}
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => addToCartHandler(item.title, item.price, item.description, item.img)}
            className="itemContainer container mb-4 col-md-6 col-lg-4 col-xl-3"
          >
            <div className="card shadow-sm p-4">
              {!isItemsLoaded ? (
                <div class="spinner-border" role="status">
                  <span class="sr-only"></span>
                </div>
              ) : (
                <img className="p-2" src={item.img} alt="" />
              )}

              <div className="body text-light p-2 mt-4">
                <h5>{item.title}</h5>
                <p className="text-secondary">
                  {item.description}
                </p>
                <button className="mt-3 addToCardBtn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuitarProducts;
