import React from 'react'
import CountUp from 'react-countup'

function CountUpDemo () {
  return (
    <div>

        <h1> <CountUp end={300} /></h1>
        <h1> <CountUp end={300} duration={5} /></h1>
        <h1> <CountUp start={500} end={1000} duration={5} /></h1>
        <h1> <CountUp end={1000} prefix='$' decimals={2} duration={5} /> </h1>
        <h1> <CountUp end={1000} suffix='USD' decimals={2} duration={5} /> </h1>
     
    </div>
  )
}

export default CountUpDemo
