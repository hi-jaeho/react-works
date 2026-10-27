import { useContext } from "react";
import { UserContext } from "./UserParent";

const UserGrandChild = () => {
    const user = useContext(UserContext);
    return(
        <div>
            <h2>
                UserGrandChild Component
            </h2>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
        </div>
    )
}

export default UserGrandChild