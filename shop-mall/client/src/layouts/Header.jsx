import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>상품 목록</NavLink>
            </nav>
        </div>
    )
}

export default Header;