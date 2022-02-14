import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const ColoredToolTip = () => {
  return (
    <div>
      <span style={{ color: 'yellow' }}> Colored React ToolTip </span>
    </div>
  )
}

const CustomChild = forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <div> First Line </div>
        <div> Second Line </div>
      </div>
    )
  }) 

// starts here
function ToolTipFour () {
  return (
    <div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy arrow={false} 
               delay={1000} 
               placement='left'
               content={<ColoredToolTip />}>
          <button> HoverThree </button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy placement='top-start' content={<ColoredToolTip></ColoredToolTip>}>
        <CustomChild></CustomChild>
        </Tippy>
      </div>

    </div>
  )
}

export default ToolTipFour
