import React, { useState } from 'react'
import Modal from 'react-modal'
import API from '../utils/API'
import { Input } from './Form'


// import API from '../utils/API'

export default function CreateNoteBtn() {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formObject, setFormObject] = useState({})

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function saveNote() {
    API.addNote({
      name: formObject.name,
      category: formObject.category,
      note: formObject.note
    })
      .catch(err => console.log(err))

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
          <form>
            <Input
              onChange={handleInputChange}
              name="name"
            />
            <Input
              onChange={handleInputChange}
              name="category"

            />
            <Input
              onChange={handleInputChange}
              name="note"
              rows="20"

            />
            <div className="row_new-note-form-buttons">
              <div
                onClick={saveNote}
                disabled={!formObject.name && !formObject.category}
              >Save</div>
              <div onClick={closeModal}>Cancel</div>
            </div>

          </form>




        </div>
      </Modal>
    </div>



  )
}
