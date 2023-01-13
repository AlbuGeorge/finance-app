import React from 'react'
import Card from '../Card'
import data from '../../constants/data'

const MainSection = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex gap-6">
        {data.summary.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </div>
    </div>
  )
}

export default MainSection
