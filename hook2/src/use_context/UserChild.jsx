import UserGrandChild from "./UserGrandChild";

const UserChild = () => {
    
    return (
        <div>
            <h2>UserChild</h2>
            <p>(user 데이터를 전달하지 않음)</p>
            <UserGrandChild />
        </div>
    )
}

export default UserChild;