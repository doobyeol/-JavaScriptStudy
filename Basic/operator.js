// 연산자

var x = 10;

// 연산자 표현식
x + 30;  // 식별자 표현식과 숫자 리터럴과 연산자의 조합

// 할당문
x = 5;

// 함수 선언문
function foo() { }

// 조건문
if (x > 5) { … }

// 반복문
for (var i = 0; i < 10; i++) { }

// 산술 연산자
5 * 4 // 20

// 문자열 연결 연산자
'My name is ' + 'Lee' // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
3 > 5 // false

    // 논리 연산자
    (5 > 3) && (2 < 4)  // true

// 타입 연산자
typeof 'Hi' // "string"

// 산술 연산자
5 + 2  // 7
5 - 2  // 3
5 * 2  // 10
5 / 2  // 2.5
5 % 2  // 1

// 단항 산술 연산자
var x = 5, result;

// 선대입 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

+10 // 10
    + '10' // 10
    + true // 1
    + false // 0

    - 10 // -10
    - '10' // -10
    - true // -1
    - false // -0

// 문자열 연결 연산자
'1' + '2'      // '12'
'1' + 2       // '12'

// 산술 연산자
1 + 2          // 3
1 + true       // 2 (true → 1)
1 + false      // 1 (false → 0)
true + false    // 1 (true → 1 / false → 0)
1 + null       // 1 (null → 0)
1 + undefined // NaN (undefined → NaN)

// 할당 연산자
var x;

x = 10;   // 10
x += 5;   // 15
x -= 5;   // 10
x *= 5;   // 50
x /= 5;   // 10
x %= 5;   // 0

var str = 'My name is ';
str += 'Lee'; // My name is Lee

var x, y;
y = x = 10; // 연쇄 할당(Chained assignment)
console.log(x, y); // 10 10

// 동등 비교
5 == 5    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 같은 값을 같는다.
5 == '5'   //true
5 == 8    // false

'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

// 일치 비교
5 === 5   // true
5 === '5' // false

isNaN(NaN) // true
0 === -0     // true

// 부동등 비교
5 != 8    // true
5 != 5    // false
5 != '5'  // false

// 불일치 비교
5 !== 8   // true
5 !== 5   // false
5 !== '5' // true

var x = 2;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수

var x = 2, result;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = '홀수';
else result = '짝수';

console.log(result); // 짝수

// 논리합(||) 연산자
true || true   // true
true || false  // true
false || true  // true
false || false // false

// 논리곱(&&) 연산자
true && true   // true
true && false  // false
false && true  // false
false && false // false

// 논리 부정(!) 연산자
!true  // false
!false // true

// 암묵적 타입 변환
!0 // true

// 단축 평가
'Cat' && 'Dog' // “Dog”

var x, y, z;
x = 1, y = 2, z = 3; // 3

typeof ''              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () { }  // "function"

typeof null  // "object"

var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true

typeof undeclared  // "undefined"