import { useDispatch } from "react-redux"
import { increament, decrement } from "../store/counterSlice";

const CountReducer = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter</h2>
            <h3>현재 숫자: {count}</h3>
            <button onClick={() =>
                dispatch(increament())
            }>중가</button>
            <button onClick={() =>
                dispatch(decrement())
            }>중가</button>
        </div>
    )
}

export default CountReducer







sjdlkjlijoijoijlkjlk