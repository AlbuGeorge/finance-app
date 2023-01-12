import React from 'react'
import { Barlow } from '@next/font/google'

const barlow = Barlow({ weight: '400', subsets: ['latin'] })

const Card = (props) => {
  return (
    <div className="flex flex-col p-6 w-1/3 rounded-lg shadow-lg items-center bg-white text-center">
      <h1
        className={`${
          props.title === 'Expense' ? 'text-red-700' : 'text-green-700'
        } text-4xl font-semibold`}>
        {props.amount} {props.currency}
      </h1>

      <h3 className="text-gray-600 text-xl mt-2">{props.title}</h3>
    </div>
  )
}

export default Card
