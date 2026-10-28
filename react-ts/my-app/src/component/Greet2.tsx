interface GreetProps{
    name: string,
    age: number

    doClick: () => void
}

const Greet2 = ({name, age, doClick}: GreetProps) => {

    return(
        <div>
            <h3>이름: {name}</h3>
            <h3>나이: {age}</h3>
            <button onClick={doClick}>Click</button>
        </div>
    )
}

export default Greet2;