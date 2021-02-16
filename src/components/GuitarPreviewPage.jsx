import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
const GuitarPreviewPage = ({ setIsPrevClicked, preview, addToCartHandler, modalShow, setModalShow }) => {
  
  return (
    <div>
      <h1 className="previewPageTitle text-center py-5">Gretch Guitar</h1>
      {preview.map((item) => (
        <div key={item.id} className="guitarPreview row p-5">
          <img
            className="p-5 col-xl-6 col-lg-12 col-md-12"
            src={item.img}
            alt=""
          />
          <div className="decription p-5 col-xl-6 col-lg-12 col-md-12">
            <h2 className="text-light">Model: {item.title}</h2>
            <h4 className="text-secondary">Made by Gretch</h4>
            <h4 className="py-5">Price: ${item.price}</h4>
            <p className="lead text-light">{item.description}</p>
            <div className="prevButtons">
              <button
                onClick={() => addToCartHandler(item.title, item.price, item.img, item.description)}
                className="mt-3 prevAddToCartBtn"
              >
                Add to Cart
              </button>

              <button
                onClick={() => setIsPrevClicked(false)}
                className="mt-3 prevBackBtn"
              >
                Back to Shopping
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className="" style={{ fontSize: "25px" }}>
          {preview.map((item) => (
            <span style={{ textDecoration: "underline" }}>{item.title}</span>
          ))}{" "}
          <br />
          has successfully added to the Cart!
          <div className="mt-4">
            <Link to="/cart">
              <button className="btn btn-warnings">Go to Cart</button>
            </Link>

            {/* BUG HERE!!!! Link doesn't let me go to Homepage */}
            {/* <Link to="/">
              <button className="btn btn-warnings">Back to shopping</button>
            </Link> */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GuitarPreviewPage;
