import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const savingsSlice = createSlice({
  name: 'savings',
  initialState: [
    {
      id: nanoid(),
      title: 'January',
      amount: 300,
      date: '10-01-2023',
      category: 'Vacantion',
    },
  ],
  reducers: {
    ADD_SAVING(state, action) {
      state.push(action.payload)
    },
    REMOVE_SAVING(state, action) {
      const index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1)
    },
  },
})

export const { ADD_SAVING, REMOVE_SAVING } = savingsSlice.actions

export default savingsSlice.reducer
