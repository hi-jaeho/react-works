import { useReducer, useState } from "react"

const initialState = {balance : 0}
const reducer = (state, action) => {
    console.log(state, action);
    // 예금: DEPOSIT
    // 출금: WITHDRAW
    // action.payload - AMOUNT(액수)
    switch(action.type){
        case "DEPOSIT":
            return { ...state, balance: state.balance + action.payload}
        case "WITHDRAW":
            if(state.balance < action.payload){
                alert("잔액 부족!");
                return state;
            }
            return { ...state, balance: state.balance - action.payload}
        default:
            return state;
    }
}
const BankReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [amount, setAmount] = useState(0); // 입,출금 금액

    return (
        <div>
            <h2>에금 및 출금</h2>
            <h3>잔고: {state.balance}원</h3>
            <input 
                type="text"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                step={1000}
            />
            <button onClick={() => {
                dispatch({type: "DEPOSIT", payload: amount})
            }}>예금</button>
            <button onClick={() => {
                dispatch({type: "WITHDRAW", payload: amount})
            }}>출금</button>
        </div>
    )

}

export default BankReducer