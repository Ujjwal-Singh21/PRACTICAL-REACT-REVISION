import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// defining our custom toast notifications
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}> Close </button>
    </div>
  )
}

toast.configure()
function Custom_Toast () {

  const notify = () => {

    toast.warn(<CustomToast />, {position: toast.POSITION.TOP_LEFT,
      autoClose: 8000
    })
  }
  
  return (
    <div>
      <button onClick={notify}> Notify! </button>
    </div>
  )
}

export default Custom_Toast
