import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom";


const Cart = () => {
    const { cartItems, totalQuantity, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
    const { products } = useProduct();

    // 장바구니 전체 비우기(컨펌받기)
    const handleClearCart = () => {
        if(window.confirm("혼또니 초기화 하실꺼?")){
            clearCart();
        }
        else{
            return;
        }
    }
    
    return(
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p className="cart_empty">장바구니가 비어 있습니다<div className=""></div></p>
            ) : (
                <>
                    <ul className="cart_list">
                        {cartItems.map(item => {
                            const product = products.find(p => p.id === item.productId)
                            return (
                                // 상품 정보
                                <li key={item.productId} className="cart_item">
                                    <div className="cart_info">
                                        <span className="cart_category">{product?.category}</span>
                                        <span>{product?.pName}</span>
                                        
                                    </div>
                                    {/* 상품 수량 */}
                                    <div className="cart_quantity">
                                        <button
                                            onClick={() => {updateQuantity(item.productId, item.qty - 1)}}
                                            disabled={item.qty <= 1}
                                        >-</button>
                                        <span>{item.qty}</span>
                                        <button
                                            onClick={() => {updateQuantity(item.productId, item.qty + 1)}}
                                        >+</button>
                                    </div>
                                    <strong className="cart_subtotal">
                                        {product ? (product.price * item.qty).toLocaleString() : (null)}원
                                    </strong>
                                    {/* Delete Button */}
                                    <button
                                        className="cart_remove"
                                        onClick={() => {removeFromCart(item.productId)}}
                                    >
                                    삭제</button>
                                </li>
                            )
                        })}
                    </ul>
                    {/* 통계 요약 */}
                    <div className="cart_summary">
                        <span>{totalQuantity}개</span>
                        <span>{totalPrice.toLocaleString()}원</span>
                    </div>
                    {/* 전체 비우기 및 계속 링크 */}
                    <div className="cart_buttons">
                        <button 
                            className="cart_clear"
                            onClick={handleClearCart}
                        >장바구니 비우기</button>
                        <Link to='/' className="cart_link">쇼핑 계속하기</Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart