import React from 'react'
import MainSection from './MainSection'

const Dasboard = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex justify-between py-4 items-center">
        <h1 className="text-4xl font-medium text-gray-800">Dashboard</h1>
        <span>{}</span>
      </div>
      <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
      {/* sections */}
      <MainSection />
    </section>
  )
}

export default Dasboard
