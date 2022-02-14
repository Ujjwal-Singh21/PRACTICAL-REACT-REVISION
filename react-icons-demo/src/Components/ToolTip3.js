import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredToolTip = () => {
    return (
        <div>
            <span style={{color: 'yellow'}}> Colored React ToolTip </span>
        </div>
    )
}
function ToolTipThree () {
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

      
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredToolTip />}>
          <button> HoverThree </button>
        </Tippy>
      </div>
      
    </div>
  )
}

export default ToolTipThree
