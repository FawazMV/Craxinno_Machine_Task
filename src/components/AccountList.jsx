import React, { useState } from 'react'

const Accountaccounts = ({ accounts, setAccounts }) => {
  const [balance, setBalance] = useState('')

  const handleSubmit = () => {
    if (balance) {
      setAccounts([...accounts, { balance }])
      setBalance('')
    }
  }

  return (
    <div>
      <h2>Accounts</h2>
      <h3>Count : {accounts.length}</h3>
      <label htmlFor='balance'>Balance</label>
      <input
        type='number'
        id='balance'
        onChange={e => setBalance(e.target.value)}
        value={balance}
      />
      <button disabled={!balance} onClick={handleSubmit} type='button'>
        Submit
      </button>

      {accounts.map((acc, index) => (
        <div key={index}>
          Balance{index + 1} : {acc?.balance}
        </div>
      ))}
    </div>
  )
}

export default Accountaccounts
