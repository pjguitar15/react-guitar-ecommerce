import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import GuitarProducts from "./GuitarProducts.jsx";
import GuitarPreviewPage from "./GuitarPreviewPage.jsx";
const Home = ({ cart, setCart }) => {
  const [isPrevClicked, setIsPrevClicked] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [preview, setPreview] = useState([]);

  function previewHandler(title, price, description, img) {
    setIsPrevClicked(true);
    setPreview([
      { title: title, price: price, description: description, img: img },
    ]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function addToCartHandler(title, price, img, description) {
    setModalShow(true);
    const some = cart.some((item) => item.title === title);
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
      ]);
    }
  }
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
  );
};

export default Home;
