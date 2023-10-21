import React from 'react'
import { useDispatch } from 'react-redux'
import { changeRepayment } from '../Redux/accountsSlice'

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
    <div>
      Initial Balance: {initialBalance}
      <input type='text' value={repaymentValue} onChange={handleValueChange} />
    </div>
  )
}

export default Repayment
