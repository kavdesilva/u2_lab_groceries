import { useState } from "react"

const Groceries = ({ item, index }) => {

    const [purchased, setPurchased] = useState(false)
    const handleClick = () => {
        setPurchased(true)
    }

    if (purchased === false)
    return (
        <div className="item" key={index}>
            <p>{index+1}</p>
            <p>item: {item.item}</p>
            <p>brand: {item.brand}</p>
            <p>units: {item.units}</p>
            <p>quantity: {item.quantity}</p>
            <button onClick={handleClick}>purchased</button>
        </div>
    )
}

export default Groceries