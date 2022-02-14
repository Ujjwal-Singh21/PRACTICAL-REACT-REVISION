import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

function ToolTipTwo () {
  return (
    <div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy content='Basic Tooltip'>
          <button> HoverOne </button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}> Colored ToolTip </span>}>
          <button> HoverTwo </button>
        </Tippy>
      </div>
      
    </div>
  )
}

export default ToolTipTwo
