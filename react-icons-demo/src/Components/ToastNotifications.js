import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

toast.configure()
function ToastNotifications () {
  const notify = () => {
  // by default position : - top right
 // toast('Basic Notification!')
    toast('Basic Notification!', { position: toast.POSITION.TOP_LEFT })
    toast('Basic Notification!', { position: toast.POSITION.TOP_RIGHT })
    toast('Basic Notification!', { position: toast.POSITION.TOP_CENTER })
    toast('Basic Notification!', { position: toast.POSITION.BOTTOM_LEFT })
    toast('Basic Notification!', { position: toast.POSITION.BOTTOM_RIGHT })
    toast('Basic Notification!', { position: toast.POSITION.BOTTOM_CENTER })
  }
  return (
    <div>
      <button onClick={notify}> Notify! </button>
    </div>
  )
}

export default ToastNotifications
