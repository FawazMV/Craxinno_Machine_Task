import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { idGenerator } from '../utils/helpers'
import { addAccount, removeAccount } from '../Redux/accountsSlice'
import {
  divStyle,
  headingText,
  inputbox,
  lableStyle
} from '../utils/commonStyles'

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

  const handleRemove = acc => {
    const res = confirm(`Do you want to remove amount ${acc.balance} ?`)
    if (res) dispatch(removeAccount(acc.id))
  }

  return (
    <div className={divStyle}>
      <h2 className={headingText}>Accounts</h2>
      <h3 className='text-gray-600 font-medium'>
        Count: {accountsData.length}
      </h3>
      <div className='mt-4'>
        <label htmlFor='balance' className={lableStyle}>
          Balance
        </label>
        <input
          type='number'
          id='balance'
          onChange={e => setBalance(e.target.value)}
          value={balance}
          className={inputbox}
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
            onClick={() => handleRemove(account)}
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
