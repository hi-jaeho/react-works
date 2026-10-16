import { Link } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    
    // db -> data 가져오기
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await api.get('/products');

                setProducts(response.data);
            }catch(error){
                console.log("상품 목록 조회 에러: ", error);
            }
        }
        fetchProducts(); // 함수를 호출해야 실행
    }); // 최초 1번 렌더링

    return(
        <div className="product-list">
            <h2>상품 리스트</h2>
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>상품명</th><th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.ID}>
                            <td>{product.ID}</td>
                            <td>
                                <Link to={`/products/${product.ID}`}>{product.PRODUCT_NAME}</Link>
                            </td>
                            <td>{product.PRICE}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="btn-add">
                <Link to="/add-product">
                    <button type="button">상품 등록</button>   
                </Link> 
            </div>
        </div>
    )
}

export default ProductList;