import React from 'react'
import { useSelector } from 'react-redux'

import Repayment from './components/Repayment'
import AccountsList from './components/AccountList'
import LineGraph from './components/LineGraph'

const App = () => {
  const { accounts, repayment } = useSelector(state => state.accounts)

  return (
    <div className='flex w-full flex-wrap gap-10 p-3 sm:p-10'>
      <div>
        <AccountsList accountsData={accounts} />
      </div>
      <div className='max-w-3xl w-full'>
        <Repayment accountsData={accounts} repaymentValue={repayment} />
        <LineGraph accountsData={accounts} repaymentValue={repayment} />
      </div>
    </div>
  )
}

export default App
