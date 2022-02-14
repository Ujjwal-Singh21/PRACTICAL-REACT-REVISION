import React from 'react'
import CountUp, { useCountUp } from 'react-countup'

function CountUpDemoTwo () {
  const countUpRef = React.useRef(null)
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 5,
    end: 10000,
    startOnMount: false
  })

  return (
    <div>
      <div ref={countUpRef}>
        {/* <h1> {countUp} </h1> */}
        <button onClick={start}> Start </button>
        <button onClick={pauseResume}> Pause/Resume </button>
        <button onClick={reset}> Reset </button>
        <button onClick={() => update(2000)}> Update to 2000 </button>
      </div>

      <h1>
        <CountUp end={300} />
      </h1>
      <h1>
        <CountUp end={300} duration={5} />
      </h1>
    </div>
  )
}

export default CountUpDemoTwo
