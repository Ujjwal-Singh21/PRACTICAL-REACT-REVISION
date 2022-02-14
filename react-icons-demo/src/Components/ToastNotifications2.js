import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

toast.configure()
function ToastNotificationsTwo () {

  const notify = () => {
    toast('Basic Notification!', { position: toast.POSITION.TOP_LEFT })
    toast.success('Success Notification!', { position: toast.POSITION.TOP_RIGHT })
    toast.info('Info Notification!', { position: toast.POSITION.TOP_CENTER })
    toast.error('Error Notification!', { position: toast.POSITION.BOTTOM_LEFT })
    toast.warn('Warning Notification!', { position: toast.POSITION.BOTTOM_RIGHT })
    toast('Basic Notification!', { position: toast.POSITION.BOTTOM_CENTER })
  }
  return (
    <div>
      <button onClick={notify}> Notify! </button>
    </div>
  )
}

export default ToastNotificationsTwo
