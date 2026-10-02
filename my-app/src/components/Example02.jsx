// 리스트(배열) 랜더링

const Example02 = () => {
    const items = ["apple", "banana", "strawberry"];

    return(
        <div>
            <h2>List Rendering!</h2>
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index}> {item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Example02;