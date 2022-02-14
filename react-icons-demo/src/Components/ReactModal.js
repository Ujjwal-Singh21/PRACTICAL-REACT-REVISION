import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function ReactModal () {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}> Open Modal </button>

      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={
            {
                overlay: {
                    backgroundColor: 'yellow'
                },
                content: {
                    color: 'red'
                }
            }
        }
      >
        <h2> Modal Title </h2>
        <p> Modal Body </p>
        <button onClick={() => setModalIsOpen(false)}> Close Modal </button>
      </Modal>
    </div>
  )
}

export default ReactModal
