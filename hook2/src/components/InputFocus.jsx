import { useRef } from "react";

const InputFocus = () => {
    // 참조 객체 생성
    const inputRef = useRef(null);
    //input 태그에 ref 속성을 넣으면 
    console.log(inputRef); // {current: input}

    // Dom 제어 함수
    const doClick = () => {
        alert(`환영합니다. ${inputRef.current.value}님`);
        inputRef.current.focus();
        inputRef.current.value = "";
    }
    
    return(
        <div>
            <h2>DOM 요소에 접근(입력상자)</h2>
            <input 
                type="text" 
                ref={inputRef}
                placeholder="이름을 입력하세요"
            />
            <button onClick={doClick}>가입</button>
        </div>
    )
}

export default InputFocus;