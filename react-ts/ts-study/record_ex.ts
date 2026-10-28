// Record<Keys, Type> 객체의 키와 값의 타입을 간편하게 정희할 수 있게 도와주는 유틸리티 타입

type Fruit = 'apple' | 'banana' | 'peach';

const prices: Record<Fruit, number> = {
    apple: 2000,
    banana: 1500,
    peach: 9000
}

console.log(`사과: ${prices.apple}`);

type StringMap = Record<string, string>

const translations: StringMap = {
    hello: "hello",
    bye: "goodbye"
}

console.log(translations.bye);
