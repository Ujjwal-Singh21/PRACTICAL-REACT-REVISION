import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

function CreditCard () {
  const [number, setNumber] = useState(' ')
  const [name, setName] = useState(' ')
  const [expiry, setExpiry] = useState(' ')
  const [cvc, setCvc] = useState(' ')
  const [focus, setFocus] = useState(' ')

  return (
    <div>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />

      <br />

      <form>
        <input
          type='tel'
          placeholder='Card Number'
          name='number'
          value={number}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <input
          type='text'
          placeholder='MM/YY expiry'
          name='expiry'
          value={expiry}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

        <input
          type='tel'
          placeholder='cvc'
          name='cvc'
          value={cvc}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />

      </form>
    </div>
  )
}

export default CreditCard
