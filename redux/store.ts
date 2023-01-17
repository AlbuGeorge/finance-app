import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from './reducers/expenses'
import savingsReducer from './reducers/savings'
import incomeReducer from './reducers/income'

export default configureStore({
  reducer: {
    expenses: expensesReducer,
    savings: savingsReducer,
    income: incomeReducer,
  },
})
