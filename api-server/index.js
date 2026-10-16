import express from 'express'


// 앱 객체 생성
const app = express();
const PORT = 8000;

// 기본 라우터
app.get('/', (req, res) => {
    res.send("<h1>Hello, Express!!</h1>");
})

// 상품 데이터 생성 -> 프론트에 보내기(json 데이터)
// app.get(URL 경로, 콜백함수)
app.get("/api/products", (req, res) => {
    const products = [
        {id:1, name:"무선 마우스", price:30000},
        {id:2, name:"무선 이어폰", price:40000},
        {id:3, name:"무선 키보드", price:50000},
    ]

    res.json(products);
});

// 요청 본문을 json 형태로 파싱하기 위한 미들웨어 -> postman에서 post 요청 넣으면 그거 그대로 콘솔에 출력됨
app.use(express.json());

// 상품 등록
// app.post(URL 경로, 콜백함수)
// id, name, price
app.post("/api/products", (req, res) => {
    console.log(req.body);
    res.send("Register completed!");
})

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 중... http://localhost:${PORT}`);
})