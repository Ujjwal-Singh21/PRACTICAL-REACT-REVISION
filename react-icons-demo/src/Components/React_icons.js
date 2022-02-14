import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'
import { MdFlutterDash } from 'react-icons/md'
import { MdAccessibilityNew } from 'react-icons/md'

function React_icons () {
  return (
    <div>
      <FaFacebookMessenger />
      <MdFlutterDash />
      <MdAccessibilityNew />
      <MdAlarm />

      <br />

      <MdFlutterDash color='red' size='8rem' />
      <MdAccessibilityNew color='orange' size='8rem' />
      <MdAlarm color='deeppink' size='8rem' />
    </div>
  )
}

export default React_icons
