// 구조 분해 할당
const arr = [1, 2];
console.log(arr[0]);
console.log(arr[1]);
console.log("----");
const [x, y] = arr;
console.log(`x = ${x}`);
console.log(`y = ${y}`);

// 객체 구조 분해 할당
const product = {
    name: "무선키보드",
    price: 30000
}
console.log("----");
console.log(product.name);
console.log(product.price);

const {name, price} = product;
console.log("----");
console.log(`제품명 : ${name}`);
console.log(`가격 : ${price}`);