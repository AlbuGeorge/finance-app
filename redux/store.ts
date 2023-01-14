import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from './reducers/expenses'
import savingsReducer from './reducers/savings'

export default configureStore({
  reducer: {
    expenses: expensesReducer,
    savings: savingsReducer,
  },
})
