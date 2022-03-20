import { useState, useContext, useEffect } from 'react'
import Context from '../context/Context'

export default function Toggle({ text = 'text', nameOption = 'numbers' }) {
  const id = `toggle-${text}`
  const [isChecked, setIsChecked] = useState(true)
  const { settings, updateState } = useContext(Context)

  useEffect(() => {
    updateState(nameOption, isChecked)
  }, [isChecked])

  const handleClick = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div className="w-[100%] h-12 flex px-5 py-7 items-center rounded-md mt-2 bg-[#040F2D]">

      <div className="flex w-[100%] justify-between items-center">
        <span className="capitalize text-white text-sm font-bold flex">{text}</span>

        <label htmlFor={id} className="flex cursor-pointer relative">
          <input onClick={handleClick} checked={isChecked} type="checkbox" id={id} className="sr-only" />
          <div className="toggle-bg bg-gray-200 border-gray-200 h-6 w-11 rounded-full"></div>
        </label>
      </div>
    </div>
  )
}