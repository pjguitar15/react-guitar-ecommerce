import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import GuitarProducts from "./GuitarProducts.jsx";
import GuitarPreviewPage from "./GuitarPreviewPage.jsx";
const Home = () => {
  const [isPrevClicked, setIsPrevClicked] = useState(false);
  const [preview, setPreview] = useState([]);
  function addToCartHandler(title, price, description, img) {
    setIsPrevClicked(true);
    setPreview([
      { title: title, price: price, description: description, img: img },
    ]);
  }
  return (
    <div>
      {/* is Preview Clicked condition */}
      {!isPrevClicked ? (
        <>
          <Navbar />

          <GuitarProducts
            setIsPrevClicked={setIsPrevClicked}
            addToCartHandler={addToCartHandler}
          />
        </>
      ) : (
        <GuitarPreviewPage
          preview={preview}
          setIsPrevClicked={setIsPrevClicked}
        />
      )}
    </div>
  );
};

export default Home;
