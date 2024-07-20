import React, { useState } from 'react'
import "../css/Header.css"

const Header = (props) => {
  const { amount, fromCurrency, sum, toCurrency } = props
  return (
    <div>
      <div className='amount-area'>{props.amount} {props.fromCurrency} equals</div>
      <div className='sum-area'>{sum} {toCurrency} </div>
    </div>
  )
}

export default Header