import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { idGenerator } from '../utils/helpers'
import { addAccount, removeAccount } from '../Redux/accountsSlice'

const AccountList = ({ accountsData }) => {
  const dispatch = useDispatch()
  const [balance, setBalance] = useState('')

  const handleSubmit = () => {
    if (balance) {
      const id = idGenerator(balance)
      dispatch(addAccount({ balance, id }))
      setBalance('')
    }
  }

  const handleRemove = id => {
    dispatch(removeAccount(id))
  }

  return (
    <div className='bg-white p-4 rounded shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>Accounts</h2>
      <h3 className='text-gray-600'>Count: {accountsData.length}</h3>
      <div className='mt-4'>
        <label
          htmlFor='balance'
          className='block text-sm font-medium text-gray-700'
        >
          Balance
        </label>
        <input
          type='number'
          id='balance'
          onChange={e => setBalance(e.target.value)}
          value={balance}
          className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300'
        />
        <button
          disabled={!balance}
          onClick={handleSubmit}
          type='button'
          className='mt-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md'
        >
          Submit
        </button>
      </div>

      {accountsData.map((account, index) => (
        <div
          key={account.id}
          className='mt-4 flex justify-between items-center border-b border-gray-300'
        >
          <span className='text-base font-medium items-center flex justify-between'>
            Balance {index + 1} :
            <span className='font-extrabold text-lg ml-3'>
              {account.balance}
            </span>
          </span>
          <button
            onClick={() => handleRemove(account.id)}
            className='text-red-500 hover:text-red-700'
          >
            <TrashIcon />
          </button>
        </div>
      ))}
    </div>
  )
}

export default AccountList

const TrashIcon = () => (
  <svg width='16' height='16' fill='currentColor' viewBox='0 0 16 16'>
    <path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z' />
  </svg>
)
