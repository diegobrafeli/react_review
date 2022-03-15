import { useState } from "react"

export default function Contador() {

    const [amountCount, setAmountCount] = useState(0);

    return(
        <div>
            <h1>Contador</h1>
            <div>valor: {amountCount}</div>
            <button onClick={()=> setAmountCount(amountCount+1)}>+</button>
            <button onClick={()=> setAmountCount(amountCount-1)}>-</button>
        </div>
    )
}