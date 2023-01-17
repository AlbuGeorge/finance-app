import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiHomeAlt } from 'react-icons/bi'
import { RxDashboard } from 'react-icons/rx'
import { BsPiggyBank } from 'react-icons/bs'
import { RiPlantLine, RiCoinsLine, RiShoppingBag3Line } from 'react-icons/ri'
const Layout = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined
}) => {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-blue-900 h-screen p-5  pt-8 relative duration-300`}>
        <Image
          src="/control.png"
          alt="control"
          width={24}
          height={24}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-900
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <BiHomeAlt
            size={40}
            className={`cursor-pointer duration-500 text-white ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}>
            Finance App
          </h1>
        </div>
        <ul className="pt-6">
          <Link
            href="/"
            className="flex rounded-md p-2 cursor-pointer hover:bg-gray-100/25 text-gray-300  items-center gap-x-4 mt-2 ">
            <RxDashboard size={24} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              Dasboard
            </span>
          </Link>
          <Link
            href="/income"
            className="flex rounded-md p-2 cursor-pointer hover:bg-gray-100/25 text-gray-300  items-center gap-x-4 mt-2 ">
            <RiCoinsLine size={24} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              Income
            </span>
          </Link>
          <Link
            href="/expenses"
            className="flex rounded-md p-2 cursor-pointer hover:bg-gray-100/25 text-gray-300  items-center gap-x-4 mt-2 ">
            <RiShoppingBag3Line size={24} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              Expenses
            </span>
          </Link>
          <Link
            href="/savings"
            className="flex rounded-md p-2 cursor-pointer hover:bg-gray-100/25 text-gray-300  items-center gap-x-4 mt-2 ">
            <BsPiggyBank size={24} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              Savings
            </span>
          </Link>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">{props.children}</div>
    </div>
  )
}
export default Layout
