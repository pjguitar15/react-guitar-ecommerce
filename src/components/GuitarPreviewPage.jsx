import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import {
  Preview,
  AddToCartHandler,
  IsPrevClicked,
  ModalShow,
} from './GlobalState'
const GuitarPreviewPage = () => {
  const [preview, setPreview] = useContext(Preview)
  const [setIsPrevClicked] = useContext(IsPrevClicked)
  const addToCartHandler = useContext(AddToCartHandler)
  const [modalShow, setModalShow] = useContext(ModalShow)
  return (
    <div>
      <h1 className='previewPageTitle text-center py-5'>Gretch Guitar</h1>
      {preview.map((item, index) => (
        <div key={index} className='guitarPreview row mx-auto p-5'>
          <div className='p-5 col-xl-6 col-lg-12 col-md-12'>
            <img
              style={{ height: 'auto', width: '100%' }}
              src={item.img}
              alt=''
            />
          </div>

          <div className='decription p-5 col-xl-6 col-lg-12 col-md-12'>
            <h2 className='text-light'>Model: {item.title}</h2>
            <h4 className='text-secondary'>Made by Gretch</h4>
            <h4 className='py-5'>Price: ${item.price}</h4>
            <p className='lead text-light'>{item.description}</p>
            <div className='prevButtons'>
              <button
                onClick={() =>
                  addToCartHandler(
                    item.title,
                    item.price,
                    item.img,
                    item.description
                  )
                }
                className='mt-3 prevAddToCartBtn'
              >
                Add to Cart
              </button>

              <button
                onClick={() => setIsPrevClicked(false)}
                className='mt-3 prevBackBtn'
              >
                Back to Shopping
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal
        size='lg'
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body className='' style={{ fontSize: '25px' }}>
          {preview.map((item, index) => (
            <span key={index} style={{ textDecoration: 'underline' }}>
              {item.title}
            </span>
          ))}{' '}
          <br />
          has successfully added to the Cart!
          <div className='mt-4'>
            <Link to='/cart'>
              <button
                // onClick={() => setIsPrevClicked(false)}
                className='btn btn-warnings'
              >
                Go to Cart
              </button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default GuitarPreviewPage
