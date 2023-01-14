import { createSlice } from '@reduxjs/toolkit'

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [
    {
      title: 'Phone',
      amount: 300,
      date: '10-01-2023',
      category: 'miscellaneous',
    },
  ],
  reducers: {
    ADD_EXPENSE(state, action) {
      state.push(action.payload)
    },
    REMOVE_EXPENSE(state, action) {
      const index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1)
    },
  },
})

export const { ADD_EXPENSE, REMOVE_EXPENSE } = expensesSlice.actions

export default expensesSlice.reducer
