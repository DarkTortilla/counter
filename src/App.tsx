import { useState } from 'react'

import './App.css'
import Display from './atoms/Display'
import Button from './atoms/Button'

function App() {
  const [count, setCount] = useState<number>(0)

  const handleIncrement = () => {
    setCount(state=> state+1);
  }
  const handleReste = () => {
    setCount(0)
  }

  return (
    <>
      <Display data={count}></Display>

      <div className='button-section'>
        <Button type='primary' text='incrementar' onClick={handleIncrement} />
        <Button type='secundary' text='Reiniciar' onClick={handleReste} />
      </div>

    </>
  )
}

export default App
