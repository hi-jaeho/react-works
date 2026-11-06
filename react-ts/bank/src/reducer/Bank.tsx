import { useReducer, useState } from "react";

// state 타입 정의
interface BankState{
    balance: number
    history: string[];

};

type BankAction = 
    | {type: "DEPOSIT"; amount: number}
    | {type: "WITHDRAW"; amount: number}
    | {type: "RESET"}


const initialState: BankState = {balance: 0, history: []};

// 뒤에 있는 BankStates는 반환 자료형
const bankReducer = (state: BankState, action: BankAction): BankState => {
    switch(action.type){
        case "DEPOSIT":
            return {balance: state.balance + action.amount
                ,history: [...state.history, `입금 ${action.amount.toLocaleString()}`]
            }
        case "WITHDRAW":
            if (state.balance < action.amount){

                return state;
            }
            else{
                return {balance: state.balance - action.amount, history: [...state.history, `출금 ${action.amount.toLocaleString()}`]}
            }
        case "RESET":
            return initialState;
        default:
            return state;
    }   

}
const Bank = () => {
    const [state, dispatch] = useReducer(bankReducer, initialState);
    
    const [amount, setAmount] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    }

    const handelWithDraw = () => {
        if(amount > state.balance){
            alert("잔액보다 큰 금액은 출금할 수 없습니다.")
            return;
        }
        dispatch({type: "WITHDRAW", amount});
    }
    return (
        <div>
            <h2>은행 입, 출금</h2>
            <h3>잔고: {state.balance.toLocaleString()}원</h3>
            <input 
                type="number"
                value={amount}
                step={1000}
                onChange={handleChange}
           />
            <button onClick={() => dispatch({type: "DEPOSIT", amount})}>입금</button>
            <button onClick={handelWithDraw}>출금</button>
            <button onClick={() => dispatch({type: "RESET"})}>초기화</button>


            <ul>
                {state.history.map((item, index) => 
                (<li key={index}>{item}</li>))}
            </ul>
        </div>
    )
}

export default Bank;