import React from 'react'
import { FaMoneyBillWave, FaTrashAlt } from 'react-icons/fa'

const TransactionCard = (props) => {
  const toUpperCase = (el: string) => {
    return el[0].toUpperCase() + el.substring(1)
  }

  return (
    <div
      key={props.id}
      className="flex justify-between items-center rounded-md bg-slate-50 p-2 m-2">
      <div>
        <FaMoneyBillWave size={50} className="text-green-700 m-4" />
      </div>
      <div>
        <div className="flex my-2">
          <span className="bg-blue-500 rounded-md p-1 px-2 mr-3 text-white font-medium">
            {props.date}
          </span>
          <span className="bg-blue-500 rounded-md p-1 px-2 text-white font-medium">
            {toUpperCase(props.category)}
          </span>
        </div>
        <span className="font-semibold px-2">{props.title}</span>
      </div>
      <div className="text-center">
        <h3 className="font-semibold">Amount</h3>
        <span className="font-semibold">{props.amount} RON</span>
      </div>
      <a
        onClick={props.handleRemove(props.id)}
        className="text-red-500 p-2 rounded-md mr-4 cursor-pointer">
        <FaTrashAlt size={24} />
      </a>
    </div>
  )
}

export default TransactionCard
