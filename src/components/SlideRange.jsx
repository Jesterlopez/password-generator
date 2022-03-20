import Context from '../context/Context'
import { useState, useEffect, useContext } from "react"

export default function SlideRange() {
  const [length, setLength] = useState(8)
  const { updateState } = useContext(Context)

  useEffect(() => {
    updateState('length', length)
  }, [length])

  const handleChange = (e) => {
    setLength(e.target.value)
  }

  return (
    <div className="w-[100%] h-12 flex px-5 py-7 items-center justify-between rounded-md mt-2 bg-[#040F2D]">

      <span className="text-white text-sm font-bold flex capitalize">length: {length}</span>
      <div className="w-[70%] flex items-center">
        <label htmlFor="price" className="font-bold text-gray-700"></label>
        <input
          defaultValue={length}
          onChange={handleChange}
          type="range"
          min="8"
          max="32"
          className="h-2 bg-slate-300 rounded-md appearance-none w-full cursor-pointer"
        />
      </div>
    </div>
  )
}