import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";
import dayjs from 'dayjs'

const ProductInfo = () => {
    // URL의 경로 추출(받기)
    const {id} = useParams();

    const [product, setProduct] = useState("");

    // 페이지 이동
    const navigate = useNavigate();

    // db -> 해당 id 상품 가져오기
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await api.get(`/products/${id}`);
                
                setProduct(response.data);
            }catch(error){
                console.log("상품 상세 조회 에러: ", error);
            }
        }

        fetchProduct();
    }, [id]);

    return(
        <div className="product-info">
            <h2>상품 정보</h2>
            {product && (
                <div className="detail">
                    <p>상품명: {product.PRODUCT_NAME}</p>
                    <p>가격: {product.PRICE}원</p>
                    <p>등록일: {dayjs(product.CREATED_AT).format('YYYY-MM-DD HH:mm:ss')}</p>
                </div>
        )}
            <div>
                <button onClick={() => {navigate('/products')}}>목록 보기</button>
            </div>
        </div>
    )
}

export default ProductInfo;