import React from 'react'

const Repayment = ({ accounts, val, setVal }) => {
  const initialBalance = accounts.reduce(
    (total, acc) => (total += +acc.balance),
    0
  )

  const handleValueChange = e => {
    setVal(e.target.value)
  }

  return (
    <div>
      Initial Balance: {initialBalance}
      <input type='number' value={val} onChange={handleValueChange} />
    </div>
  )
}

export default Repayment
