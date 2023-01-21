import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const IEChart = () => {
  const income = useSelector((state) => state.income)
  const expenses = useSelector((state) => state.expenses)

  // Calculation of Income/Expenses
  const calcIE = (data, k) => {
    const arr = data.filter((item) => new Date(item.date).getMonth() === k)
    if (arr.length === 0) {
      return 0
    } else {
      const newArr = arr
        .map((item) => parseInt(item.amount))
        .reduce((acc, cur) => cur + acc)
      return newArr
    }
  }
  // income Data
  const incomeData = new Array(12).fill(0)
  const incomePerMonth = () => {
    for (let i = 0; i < incomeData.length; i++) {
      incomeData[i] = calcIE(income, i)
    }
  }
  incomePerMonth()

  // expenseData
  const expenseData = new Array(12).fill(0)
  const expensePerMonth = () => {
    for (let i = 0; i < expenseData.length; i++) {
      expenseData[i] = calcIE(expenses, i)
    }
  }
  expensePerMonth()

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgb(75, 192, 192)'],
        borderWidth: 1,
        maxBarThickness: 3,
      },
      {
        label: 'Expenses',
        data: expenseData,
        backgroundColor: ['rgba(237, 116, 100, 0.2)'],
        borderColor: ['rgb(237, 116, 100)'],
        borderWidth: 1,
        maxBarThickness: 3,
      },
    ],
  }

  return <Bar data={data} />
  // return (
  //   <div className="rounded-lg p-2 shadow-lg items-center bg-white">
  //     <h3 className="p-2 text-xl">Income/Expenses</h3>

  //   </div>
  // )
}

export default IEChart
