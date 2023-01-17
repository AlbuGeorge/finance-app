import React, { useState } from 'react'
import HeaderPage from '../components/HeaderPage'
import Modal from '../components/Modal'
import { nanoid } from 'nanoid'

import { useDispatch, useSelector } from 'react-redux'
import { ADD_EXPENSE, REMOVE_EXPENSE } from '../redux/reducers/expenses'
import TransactionCard from '../components/TransactionCard'

const initialFormState = {
  id: '',
  title: '',
  amount: '',
  category: '',
  date: {},
}

const Expenses = () => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const expenses = useSelector((state) => state.expenses)
  const [formData, setFormData] = useState(initialFormState)
  const dispatch = useDispatch()

  const isEmpty = expenses.length === 0

  console.log(isEmpty)
  console.log(expenses)

  const openModal = () => {
    setisModalOpen(!isModalOpen)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(ADD_EXPENSE(formData))
    setisModalOpen(!isModalOpen)
    setFormData(initialFormState)
  }

  const handleRemove = (id) => {
    console.log(id)
    dispatch(REMOVE_EXPENSE(id))
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e?.target
    setFormData((prevData) => ({
      ...prevData,
      id: nanoid(),
      [name]: value,
    }))
  }

  return (
    <>
      <HeaderPage
        pageName="Expenses"
        pageButton="New Expense"
        onClick={openModal}
      />
      {/* MODAL */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleClose={() => setisModalOpen(!isModalOpen)}>
          <div className="flex flex-col justify-between h-full w-full">
            <h1 className="text-2xl font-semibold text-center p-4">
              Add new transaction
            </h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  id="title"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Amount
                </label>
                <input
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  min={0}
                  id="amount"
                  type="number"
                  placeholder="Amount"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  min={0}
                  id="date"
                  type="date"
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="category"
                  className="block text-gray-700 text-sm font-bold mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-gray-700 border rounded-md shadow focus-within:shadow-outline focus:outline-none  focus:border-blue-700">
                  <option value="">-- Choose one category --</option>
                  <option value="grocery">Grocery</option>
                  <option value="shopping">Shopping</option>
                  <option value="food">Food</option>
                  <option value="miscellaneous">Miscellaneous</option>
                </select>
              </div>

              <div className="m-4 flex text-center justify-center gap-2">
                <button
                  onClick={() => setisModalOpen(!isModalOpen)}
                  className="bg-white border border-zinc-800 px-6 py-3 rounded-lg text-black font-medium">
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-700 px-6 py-3 rounded-lg text-white font-medium">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {/* expenses */}
      <div className="mx-auto max-w-4xl">
        <div className="p-5 bg-white rounded-lg shadow-md">
          <h1 className="text-xl font-semibold">Transactions</h1>
          <div className="p-2">
            <div className="flex flex-col">
              {isEmpty && <p className="text-cente">No expenses added</p>}
              {!isEmpty &&
                expenses.map((el) => (
                  <TransactionCard
                    key={el.id}
                    title={el.title}
                    category={el.category}
                    amount={el.amount}
                    date={el.date}
                    handleRemove={(id) => handleRemove}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expenses
