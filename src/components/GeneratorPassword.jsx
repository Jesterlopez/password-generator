import react, { useState, useEffect, useContext } from 'react'
import { IconCopy } from './IconCopy'
import SlideRange from './SlideRange'
import Toggle from './Toggle'
import { generatePassword } from '../generatePassword'
import Context from '../context/Context'


export default function GeneratorPassword() {
  const { settings } = useContext(Context)
  const [password, setPassword] = useState('')

  const handleGeneratePassword = () => {
    setPassword(generatePassword(settings))
  }

  return (
    <div className="max-w-[450px] min-w-[450px] bg-[#091642] rounded-md p-5 min-h-96 flex items-center flex-col">
      <h1 className="font-bold text-2xl text-white mb-5">Generate Password</h1>
      <div className="w-[100%] h-20 flex relative group cursor-pointer">
        <div className="w-[100%] text-xl bg-[#040F2D] h-[100%] rounded-md flex justify-center items-center text-gray-300">
          {password}
        </div>
        <div className="w-7 h-7 cursor-pointer rounded-md group-hover:visible invisible bg-[#091743] absolute right-2 top-2 z-10 flex items-center justify-center">
          <IconCopy />
        </div>
      </div>
      <h3 className='text-left w-[100%] pt-5 text-white uppercase font-bold'>Settings</h3>

      <SlideRange />

      <Toggle text='Include numbers' nameOption='numbers' />
      <Toggle text='Include Lower letters' nameOption='lower' />
      <Toggle text='Include Upper letters' nameOption='upper' />
      <Toggle text='Include symbols' nameOption='symbols' />

      <button onClick={handleGeneratePassword} className='w-[100%] transition ease-in-out hover:border-2 border-2 border-transparent text-white p-5 bg-[#040F2D] hover:bg-[#040F2D70] mt-5 rounded-md'>Generate Password</button>
    </div>
  )
}

