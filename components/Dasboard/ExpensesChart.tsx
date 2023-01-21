import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

ChartJS.register(ArcElement, Tooltip, Legend)

const ExpensesChart = () => {
  const expenses = useSelector((state) => state.expenses)

  const category = expenses.map((cat) => cat.category)

  // Calculation of Expenses by Category by Month
  const calcEC = (data, k) => {
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

  const data = {
    labels: category,
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className="w-1/2 mx-auto">
      <Doughnut data={data}></Doughnut>
    </div>
  )
}

export default ExpensesChart
