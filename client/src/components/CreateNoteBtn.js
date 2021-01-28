import React, { useState } from 'react'
import Modal from 'react-modal'

export default function CreateNoteBtn() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };


  return (
    <div>
      <div className="add-new-note__btn" onClick={openModal}>
        Add New Note +
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="container_modal">

          <input />
          <br />
          <input />
          <br />
          <input />
          <div className="row_new-note-form-buttons">
            <div>Save</div>
            <div onClick={closeModal}>Cancel</div>

          </div>




        </div>
      </Modal>
    </div>



  )
}
