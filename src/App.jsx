import React from 'react'
import { useSelector } from 'react-redux'

import Repayment from './components/Repayment'
import AccountsList from './components/AccountList'
import LineGraph from './components/LineGraph'

const App = () => {
  const { accounts, repayment } = useSelector(state => state.accounts)
  console.log(repayment)

  return (
    <>
      <Repayment accountsData={accounts} repaymentValue={repayment} />
      <AccountsList accountsData={accounts} />
      <LineGraph accountsData={accounts} repaymentValue={repayment} />
    </>
  )
}

export default App
