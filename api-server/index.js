import express from 'express'


// 앱 객체 생성
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, Express!!");
})

app.listen(8000, () => {
    console.log(`서버 실행 중...`);
})