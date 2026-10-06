import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%&*-+=";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  } ,[length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg text-orange-600 bg-gray-700 px-4 py-3 my-8 '>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} 
            className='outline-none bg-blue-400 text-white px-3 py-0.5 shadow-0 cursor-pointer'>
            Copy
          </button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            id="passwordLength"
            min={8}
            max={16}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor='passwordLength'>Length:{length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {setNumAllowed((prev) => !prev);}}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="specialCharInput"
            onChange={() => {setCharAllowed((prev) => !prev);}}
            />
            <label htmlFor="specialCharInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
