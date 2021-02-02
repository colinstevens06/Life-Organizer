import React, { useState } from 'react'
import Modal from 'react-modal'
import API from '../utils/API'
import { Input, TextArea } from './Form'

// import API from '../utils/API'

export default function CreateNoteBtn(props) {

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

  function clearInputs() {
    console.log("********** formObject BEFORE")
    console.log(formObject)
    setFormObject({})
    console.log("********** formObject AFTER")
    console.log(formObject)
    setModalIsOpen(false)

  }

  function saveNote() {
    addToDb()
    clearInputs()

    if (props.dbRefreshVariant === false) {
      props.dbRefreshTrigger(true)
    } else (
      props.dbRefreshTrigger(false)
    )
  }

  function addToDb() {
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
              id="name"
              placeholder="Name your note"
            />
            <Input
              onChange={handleInputChange}
              name="category"
              id="category"
              placeholder="Give it a category"

            />
            <TextArea
              onChange={handleInputChange}
              name="note"
              id="note"
              rows="20"
              className="input_note"
              placeholder="Write your note here"

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
