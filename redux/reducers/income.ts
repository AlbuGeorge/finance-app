import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const incomeSlice = createSlice({
  name: 'income',
  initialState: [
    {
      id: nanoid(),
      title: 'January',
      amount: 3000,
      date: '2023-01-10',
      category: 'Job',
    },
  ],
  reducers: {
    ADD_INCOME(state, action) {
      state.push(action.payload)
    },
    REMOVE_INCOME(state, action) {
      const index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1)
    },
  },
})

export const { ADD_INCOME, REMOVE_INCOME } = incomeSlice.actions

export default incomeSlice.reducer
