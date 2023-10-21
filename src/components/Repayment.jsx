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
    <div className='bg-white p-4 rounded shadow-lg'>
      <p className='text-lg font-semibold'>Initial Balance: {initialBalance}</p>
      <div className='mt-4'>
        <label
          htmlFor='payment'
          className='block text-sm font-medium text-gray-700'
        >
          Monthly Payment
        </label>
        <input
          type='number'
          value={repaymentValue}
          id='payment'
          onChange={handleValueChange}
          className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300'
        />
      </div>
    </div>
  )
}

export default Repayment
