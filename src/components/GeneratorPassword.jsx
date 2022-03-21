import react, { useState, useEffect, useContext } from 'react'
import { IconCopy } from './IconCopy'
import SlideRange from './SlideRange'
import Toggle from './Toggle'
import { generatePassword, validationInputChecked } from '../generatePassword'
import Context from '../context/Context'


export default function GeneratorPassword() {
  const { settings } = useContext(Context)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const [alert, setAlert] = useState(false)

  const handleGeneratePassword = () => {
    if (validationInputChecked(settings)) {
      setAlert(false)
      setPassword(generatePassword(settings))
    } else {
      setPassword('')
      setAlert(true)
    }
  }

  const handleCopyPassword = (e) => {
    const copyInClipboard = e.target.textContent
    if (copyInClipboard !== '') {

      if (!navigator.clipboard) {
        console.log('Clipboard API not available')
        return;
      } else {

        navigator.clipboard.writeText(copyInClipboard)
          .then(() => {
            setCopied(!copied)
            setTimeout(() => {
              setCopied(false)
            }, 3000)
          })
          .catch(err => {
            console.log('Something went wrong', err);
          })

      }

    }
  }

  return (
    <div className="max-w-[450px] w-[50%] min-w-[350px] bg-[#091642] rounded-md p-5 min-h-96 flex items-center flex-col">
      <h1 className="font-bold text-2xl text-white mb-5">Password Generator</h1>
      <div className="w-[100%] h-20 flex relative group cursor-pointer">
        <div onClick={handleCopyPassword} className="w-[100%] select-none text-lg bg-[#040F2D] h-[100%] rounded-md flex justify-center items-center text-gray-300">
          {password}
        </div>
        <div
          className={copied
            ? "text-white w-20 h-10 cursor-pointer rounded-md bg-[#091743] absolute right-2 top-2 z-10 flex items-center justify-center"
            : "group-hover:visible invisible w-7 h-7 cursor-pointer rounded-md bg-[#091743] absolute right-2 top-2 z-10 flex items-center justify-center"}>
          {
            copied ? 'Copied!' : <IconCopy />
          }
        </div>
      </div>
      <h3 className='text-left w-[100%] pt-5 text-white uppercase font-bold'>Settings</h3>

      <SlideRange />

      <Toggle text='Include numbers' nameOption='numbers' />
      <Toggle text='Include Lower letters' nameOption='lower' />
      <Toggle text='Include Upper letters' nameOption='upper' />
      <Toggle text='Include symbols' nameOption='symbols' />

      <button onClick={handleGeneratePassword} className='w-[100%] transition ease-in-out hover:border-2 border-2 border-transparent text-white p-5 bg-[#040F2D] hover:bg-[#040F2D70] mt-5 rounded-md'>Generate Password</button>
      {
        alert &&
        <div role="alert" className='mt-5'>
          <div class="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Please select at least one type of password!</p>
          </div>
        </div>
      }
    </div>
  )
}

