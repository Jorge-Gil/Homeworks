import React,{memo, useMemo} from 'react'

export const Son = memo(({numero, increment}) => {
    console.log('again reloaded...')
  return (
    <button onClick={() =>{ increment(numero)}}>
        {numero}
    </button>
  )
})
