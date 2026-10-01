// common.js에서 함수 불러오기
// let { add, myAbs } = require("./lib/common");

import {add, myAbs} from "./lib/module_ex.js"

console.log(add(4, 5));

console.log(myAbs(-100));
