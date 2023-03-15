import React, { useState, useMemo } from 'react'
import { Son } from './Son'

export const Father = () => {
    const list = [2, 4, 6, 8, 10]
    const [valor, setValor] = useState(0)

    const increment = (num) => {
        setValor(valor + num)
    }

    const memo = useMemo(() => increment(valor) , [valor])



    return (
        <div>
            <h1>Father</h1>
            <p>Total: {valor}</p>
            <hr />

            {list.map((n, idx) => {
                return (
                    <Son key={idx} numero={n} increment={memo} />
                )
            })}

        </div>
    )
}