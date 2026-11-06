import { useState } from "react";
import { CartContext } from "./CartContext";
import type { ReactNode } from "react";
import type { CartItem } from "../types/cart";
import { useProduct } from "./ProductContext";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { products } = useProduct();

  // 장바구니에 상품 추가
  const addToCart = (productId: number, qty: number) => {
    setCartItems((prevItems) => {
      // 이미 장바구니에 있는 상품인지 검색
      const existingItem = prevItems.find(
        (item) => item.productId === productId,
      );
      if (existingItem) {
        // 이미 장바구니에 있는 상품
        return prevItems.map((item) =>
          item.productId === productId
            ? { ...item, qty: item.qty + qty }
            : item,
        );
      } else {
        // 장바구니에 처음 담기
        return [...prevItems, { productId, qty }];
      }
    });
  };

  // 총 수량 계산
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.qty, 0);

  // 가격의 총합 (상품 가격 x 수량)
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId),
    );
  };

  const updateQuantity = (productId: number, qty: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, qty } : item,
      ),
    );
  };

  // 장바구니 초기화
  const clearCart = () => {
    setCartItems([]); // 초기화
  }
  return (
    <CartContext.Provider
      value={{
        updateQuantity,
        removeFromCart,
        cartItems,
        addToCart,
        totalQuantity,
        totalPrice,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
