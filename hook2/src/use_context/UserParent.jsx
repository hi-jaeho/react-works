import { createContext } from "react";
import UserChild from "./UserChild";

// props 전달방식이 아닌 컨텍스트 전역관리 방식을 사용
// UserContext() 생성
export const UserContext = createContext({});

const UserParent = () => {
    const user = {
        name: "심재호",
        age: 150
    }

    return (
        <div>
            <h2>UserParent Component</h2>
            {/* 하위 컴포넌트 어디서든 user데이터를 꺼내 쓸 수 있음 */}
            <UserContext.Provider value={user}>
                <UserChild />
            </UserContext.Provider>
        </div>
    )
}

export default UserParent;
