import React from 'react'
import Card from '../Card'

const MainSection = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-4 gap-8 h-max">
        <div className="col-span-2">
          <Card />
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default MainSection
