const Groceries = ({ groceries, handleClick }) => {

    return (
        <div className="list">
            {groceries?.map((item, index) => {
                if (item.isPurchased === false)
                return (
                    <div className="item" key={index}>
                        <p>{index+1}</p>
                        <p>item: {item.item}</p>
                        <p>brand: {item.brand}</p>
                        <p>units: {item.units}</p>
                        <p>quantity: {item.quantity}</p>
                        <button onClick={handleClick(index)}>purchased</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Groceries