import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { calculateGraphData } from '../utils/helpers'

const LineGraph = ({ accountsData, repaymentValue }) => {
  const data = calculateGraphData(accountsData, repaymentValue)
  return (
    <div className='bg-white p-4 rounded shadow-lg'>
      <h3 className='text-xl font-semibold mb-4'>
        Balance of accounts after a number of months
      </h3>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#555' />
          <XAxis
            dataKey='index'
            tick={{ fontSize: 14, fill: 'black' }}
            tickMargin={10}
            stroke='black'
          />
          <YAxis
            tick={{ fontSize: 14, fill: 'black' }}
            tickMargin={10}
            stroke='black'
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#111',
              border: 'none',
              boxShadow: '2px 2px 5px rgba(255, 255, 255, 0.3)'
            }}
            labelStyle={{ fontSize: 16, fontWeight: 'bold', color: '#ccc' }}
            itemStyle={{ fontSize: 14, color: '#ccc' }}
          />
          <Legend wrapperStyle={{ fontSize: 14, fill: '#ccc' }} />
          <Line
            type='basis'
            dataKey='balance'
            stroke='blue'
            strokeWidth={3}
            name='Account Balance'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineGraph
