import React, { useState } from 'react'
import HeaderPage from '../components/HeaderPage'
import Modal from '../components/Modal'

const Expenses = () => {
  const [isModalOpen, setisModalOpen] = useState(false)

  const openModal = () => {
    setisModalOpen(!isModalOpen)
  }

  return (
    <>
      <HeaderPage
        pageName="Expenses"
        pageButton="New Expense"
        onClick={openModal}
      />
      <button onClick={() => setisModalOpen(!isModalOpen)}>CLOSE</button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          handleClose={() => setisModalOpen(!isModalOpen)}>
          <div className="flex flex-col justify-between h-full w-full">
            <form className="bg-white px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  id="title"
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Amount
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  min={0}
                  id="amount"
                  type="number"
                  placeholder="Amount"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-700"
                  min={0}
                  id="amount"
                  type="date"
                />
              </div>
              <div className="mb-4">
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none  focus:border-indigo-600">
                  <option>ReactJS Dropdown</option>
                  <option>Laravel 9 with React</option>
                  <option>React with Tailwind CSS</option>
                  <option>React With Headless UI</option>
                </select>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Expenses
