import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

toast.configure()
function ToastNotificationsThree () {
    
  const notify = () => {

    toast('Basic Notification!', { position: toast.POSITION.TOP_LEFT })

    toast.success('Success Notification!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 10000
    })

    toast.info('Info Notification!', { position: toast.POSITION.TOP_CENTER,
    autoClose: 12000 })

    toast.error('Error Notification!', { position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 14000 })

    toast.warn('Warning Notification!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false
    })

    toast('Basic Notification!', { position: toast.POSITION.BOTTOM_CENTER })
  }
  return (
    <div>
      <button onClick={notify}> Notify! </button>
    </div>
  )
}

export default ToastNotificationsThree
