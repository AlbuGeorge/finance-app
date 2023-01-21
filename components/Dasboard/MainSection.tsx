import React, { useState } from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'
import IEChart from './IEChart'
import ExpensesChart from './ExpensesChart'

const MainSection = () => {
  const expenses = useSelector((state) => state.expenses)
  const savings = useSelector((state) => state.savings)
  const income = useSelector((state) => state.income)

  const [showChart, setShowChart] = useState(0)

  //showChart = 0 -> Income/Expense Chart
  //showChart = 1 -> Expense Chart

  const handleDropDown = (e) => {
    const option = e.target
    e.preventDefault()
    if (option.value === 'Income/Expenses') {
      setShowChart(0)
    } else if (option.value === 'Expenses') {
      setShowChart(1)
    } else return
  }

  console.log(showChart)

  const expenseTotal = expenses
    .map((expense) => parseFloat(expense.amount))
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const savingsTotal = savings
    .map((savings) => parseFloat(savings.amount))
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const incomeTotal = income
    .map((income) => parseFloat(income.amount))
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex gap-6 mb-6">
        <Card amount={incomeTotal} currency="RON" title="Income" />
        <Card amount={expenseTotal} currency="RON" title="Expenses" />
        <Card amount={savingsTotal} currency="RON" title="Savings" />
      </div>

      <div className="rounded-lg p-2 shadow-lg items-center bg-white">
        <select className="p-3" onChange={handleDropDown}>
          <option value="Income/Expenses">Income / Expenses</option>
          <option value="Expenses">Expenses</option>
        </select>
        {showChart === 0 && <IEChart />}
        {showChart === 1 && <ExpensesChart />}
      </div>
    </div>
  )
}

export default MainSection
