import React from 'react'
import { useDispatch } from 'react-redux'
import { changeRepayment } from '../Redux/accountsSlice'
import {
  divStyle,
  headingText,
  inputbox,
  lableStyle
} from '../utils/commonStyles'

const Repayment = ({ accountsData, repaymentValue }) => {
  const dispatch = useDispatch()

  const initialBalance = accountsData.reduce(
    (total, acc) => (total += +acc.balance),
    0
  )

  const handleValueChange = e => {
    dispatch(changeRepayment(e.target.value))
  }

  return (
    <div className={divStyle}>
      <p className={headingText}>Initial Balance: {initialBalance}</p>
      <div className='mt-4'>
        <label htmlFor='payment' className={lableStyle}>
          Monthly Payment
        </label>
        <input
          type='number'
          value={repaymentValue}
          id='payment'
          onChange={handleValueChange}
          className={inputbox}
        />
      </div>
    </div>
  )
}

export default Repayment
