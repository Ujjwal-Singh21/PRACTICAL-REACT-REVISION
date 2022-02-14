import React from 'react'
import {BounceLoader,BarLoader,BeatLoader,ClimbingBoxLoader} from 'react-spinners'
import { css } from '@emotion/react'

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`
function LoadingIndicatorDemo () {
  return (
    <div>
      <BounceLoader css={loaderCSS} size={24} color='red' loading />
      <BarLoader css={loaderCSS} color='green' loading />
      <BeatLoader css={loaderCSS} size={72} color='pink' loading />
      <ClimbingBoxLoader css={loaderCSS} size={48} color='yellow' loading />
    </div>
  )
}

export default LoadingIndicatorDemo
