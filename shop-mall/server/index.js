import express from 'express'
import mysql from 'mysql2'

const app = express();
const PORT = 8000;

// mysql 연결 설정
// host
const db = mysql.createConnection({
    host: "localhost",
    user: "jsuser",
    password: "zxcv",
    database: "jsdb"
});

// mysql dbms에 연결
db.connect((err) => {
    if(err){
        console.error("DB 연결 오류!!", err);
        return;
    }
    console.log("데이터베이스에 연결했습니다.")
});

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send("<h1>API 서버와 DB 연동</h1>")
})

// 본문 요청 파싱
// 프론트 단에서 json데이터를 서버가 읽을 수 있도록 req.body를 넣어주려고
app.use(express.json());

// 상품 목록 조회
// db.query(sql, 데이터, 콜백함수)
app.get("/api/products", (req, res) => {
    const sql = "SELECT * FROM product";
    db.query(sql, (err, results) => {
        if(err){
            console.log("상품 조회 오류!! ", err);
            res.send("상품 조회 중 오류 발생!!");
            return;
        }
        res.json(results); //json 형태로 응답
    });
});

// 상품 상세 보기
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const sql = "SELECT * FROM PRODUCT WHERE ID = ?"
    db.query(sql, [productId], (err, results) => {
        if(err) {
            console.log("상품 조회 에러: ", err);
            res.send("상품 조회 중 오류가 발생했습니다.");
            return; // 즉시 종료
        }
        res.json(results[0]);
    })
})

// 상품 삭제
// app.delete("상품 삭제")
app.delete("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const sql = "DELETE FROM PRODUCT WHERE ID = ?";
    db.query(sql, [productId], (err, results) => {
        if(err){
            console.log("상품 삭제 에러: ", err);
            res.send("상품 삭제 중 오류가 발생했습니다.");
            return; // 즉시 종료
        }
        res.send("상품이 성공적으로 삭제되었습니다.");
    })
})

// 상품 수정
// app.put(경로, 콜백함수)
app.put("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const {productName, price} = req.body;

    // 수정할 상품 가져오기
    const sql = "UPDATE PRODUCT SET  PRODUCT_NAME = ?, PRICE = ? WHERE ID = ?";
    db.query(sql, [productName, price, productId], (err, result) => {
        if(err) {
            console.log("상품 조회 에러: ", err);
            res.send("상품 조회 중 오류가 발생했습니다.")
            return;
        }
        res.send("상품이 성공적으로 수정되었습니다.")
    })
})

// 서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}에서 서버 실행중...`);
})