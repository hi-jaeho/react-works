import { useState } from "react";
import type { ProductForm } from "../types/product";
import { useProduct } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const initialForm: ProductForm = {
    pName: "",
    category: "마우스",
    price: 0,
    description: ""
}

const AddProduct = () => {
    const [form, setForm] = useState<ProductForm>(initialForm)
    const { addProduct } = useProduct();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // 폼에 입력된 데이터 가져오기
    const { pName, category, price, description } = form;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    // 폼 제출 처리
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // 유효성 검사
        if(!pName.trim()){
            setError("상품명을 입력해주세요!")
                return;
        }
        if(!price || price <= 0){
            setError("유효한 가격을 입력해주세요!")
                return;
        }
        if(!description.trim()){
            setError("상품 설명을 입력해주세요!")
                return;
        }

        // 상품 추가
        addProduct({
            pName,
            category,
            price: Number(price), // 화면에 입력한 가격은 문자형이므로 숫자형 변환
            description
        });

        alert("상품 등록 완료");
        navigate('/');
    }

    const handleCancel = () => {
        setForm(initialForm);
        setError(null);
    }

    return(
        <div className="product-add">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="pName">상품명</label>
                    <input 
                        type="text" 
                        id="pName"
                        name="pName"
                        value={pName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">카테고리</label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleChange}
                    >
                        <option value="마우스">무선 마우스</option>
                        <option value="키보드">무선 키보드</option>
                        <option value="모니터">무선 모니터</option>
                        <option value="샤워기">무선 샤워기</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={price}
                        step={1000}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={description}
                        onChange={handleChange}
                        rows={4}
                    />
                </div>
                {error && <p className="product-add_error">{error}</p>}
                <div className="product-add_buttons">
                    <button type="submit">등록</button>
                    <button 
                        type='button' 
                        onClick={handleCancel}
                    >취소</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;