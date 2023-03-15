import React, {useCallback, useState} from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback(() => { 
    console.log('calling setCounter')
    setCounter((value) => value + 1)
  }, [])
    return (
      <>
    <div>CallbackHook {counter}</div>
    <ShowIncrement incrementFather={incrementFather} />
    </>
  )
}
