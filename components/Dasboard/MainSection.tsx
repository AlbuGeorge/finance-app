import React from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'

const MainSection = () => {
  const expenses = useSelector((state) => state.expenses)

  const expenseAmount = expenses
    .map((expense) => parseFloat(expense.amount))
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  console.log(expenseAmount)

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex gap-6">
        <Card amount={expenseAmount} currency="RON" title="Expenses"></Card>
      </div>
    </div>
  )
}

export default MainSection
