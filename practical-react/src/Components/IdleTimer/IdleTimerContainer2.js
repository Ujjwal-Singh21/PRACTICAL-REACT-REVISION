import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function IdleTimerContainerTwo () {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const idleTimerRef = useRef(null)
  const sessionTimeOutRef = useRef(null)

  const onIdle = () => {
    console.log('User is Idle')
    setIsModalOpen(true)
    sessionTimeOutRef.current = setTimeout(logOut, 5000)
  }

  const logOut = () => {
    setIsLoggedIn(false)
    setIsModalOpen(false)
    clearTimeout(sessionTimeOutRef.current)
    console.log('User has been Logged out')
  }

  const stayActive = () => {
    setIsModalOpen(false)
    clearTimeout(sessionTimeOutRef.current)
    console.log('User is Active')
  }

  return (
    <div>
      {isLoggedIn ? <h2> Hello Ujjwal </h2> : <h2> Hello Guest </h2>}

      <Modal isOpen={isModalOpen}
       style={
           {
               overlay:{
                   backgroundColor: 'pink'
               },
               content: {
                   color: 'deepskyblue'
               }
           }
       }
       >
        <h2> You have been idle for a while </h2>
        <p> You will be logged out soon </p>
        <div>
          <button onClick={logOut}> Log me out </button>
          <button onClick={stayActive}> Keep me signed In </button>
        </div>
      </Modal>

      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  )
}

export default IdleTimerContainerTwo
