import React, { useState } from 'react'
import AccountList from './components/AccountList'
import Repayment from './components/Repayment'
import LineGraph from './components/LineGraph'

const App = () => {
  const [accounts, setAccounts] = useState([])
  const [val, setVal] = useState(10)

  return (
    <div>
      <Repayment val={val} setVal={setVal} accounts={accounts} />
      <AccountList accounts={accounts} setAccounts={setAccounts} />
      <LineGraph data={calculateGraphData(accounts, val)} />
    </div>
  )
}

const calculateGraphData = (accounts, val) => {
  const totalBalance = accounts.reduce(
    (total, account) => (total += +account.balance),
    0
  )
  const dataPoints = [{ balance: totalBalance, index: 1 }]

  Array(12)
    .fill('')
    .map((_, index) => {
      let balance = totalBalance - val * (index + 2)
      if (balance < 0) balance = 0
      dataPoints.push({ balance, index: index + 2 })
      return null
    })

  return dataPoints
}

export default App
