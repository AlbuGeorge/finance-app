import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [
    {
      id: nanoid(),
      title: 'Phone',
      amount: 300,
      date: Date(),
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
