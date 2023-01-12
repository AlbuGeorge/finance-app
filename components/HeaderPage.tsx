import React from 'react'

const HeaderPage = (props) => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex justify-between py-4 items-center">
        <h1 className="text-4xl font-medium text-gray-800">{props.pageName}</h1>
        <button
          onClick={props.onClick}
          className="bg-blue-700 px-6 py-3 rounded-lg text-white font-medium">
          {props.pageButton}
        </button>
      </div>
      <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
    </section>
  )
}

export default HeaderPage
