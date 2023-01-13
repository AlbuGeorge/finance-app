import { createSlice } from '@reduxjs/toolkit'

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [
      { title: 'Phone', amount: '300', date: '', category: 'misc' },
      { title: 'TV', amount: '1000', date: '', category: 'misc' },
    ],
  },
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, decrement, incrementByAmount } = transactionsSlice.actions

export default transactionsSlice.reducer
