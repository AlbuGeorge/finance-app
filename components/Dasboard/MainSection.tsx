import React, { use } from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'

const MainSection = () => {
  const expenses = useSelector((state) => state.expenses)
  const savings = useSelector((state) => state.savings)
  const income = useSelector((state) => state.income)

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
      <div className="flex gap-6">
        <Card amount={incomeTotal} currency="RON" title="Income" />
        <Card amount={expenseTotal} currency="RON" title="Expenses" />
        <Card amount={savingsTotal} currency="RON" title="Savings" />
      </div>
    </div>
  )
}

export default MainSection
