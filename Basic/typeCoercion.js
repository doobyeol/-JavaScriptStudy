// 타입 변환과 단축 평가

// 의도적으로 값의 타입을 변환 : 타입 캐스팅(Type casting)

var x = 10;

// 명시적 타입 변환
var str = x.toString(); // 숫자를 문자열로 타입 캐스팅한다.
console.log(typeof str); // string

// 자바스크립트 엔진으로 인한 암묵적 타입 변환
var x = 10;

// 암묵적 타입 변환
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str = x + '';

console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10

// 표현식이 모두 문자열 타입이여야 하는 컨텍스트
'10' + 2               // '102'
    `1 * 10 = ${1 * 10}` // "1 * 10 = 10"

// 표현식이 모두 숫자 타입이여야 하는 컨텍스트
5 * '10' // 50

// 표현식이 불리언 타입이여야 하는 컨텍스트
!0 // true
if (1) { }

// 숫자 타입
0 + ''              // "0"
    - 0 + ''             // "0"
1 + ''              // "1"
    - 1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"
    - Infinity + ''      // "-Infinity"
// 불리언 타입
true + ''           // "true"
false + ''          // "false"
// null 타입
null + ''           // "null"
// undefined 타입
undefined + ''      // "undefined"
    // 심볼 타입
    (Symbol()) + ''     // TypeError: Cannot convert a Symbol value to a string
        // 객체 타입
        ({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
[] + ''             // ""
    [10, 20] + ''       // "10,20"
        (function () { }) + '' // "function(){}"
Array + ''          // "function Array() { [native code] }"

1 - '1'    // 0
1 * '10'   // 10
1 / 'one'  // NaN
'1' > 0   // true

    // 문자열 타입
    + ''             // 0
    + '0'            // 0
    + '1'            // 1
    + 'string'       // NaN
    // 불리언 타입
    + true           // 1
    + false          // 0
    // null 타입
    + null           // 0
    // undefined 타입
    + undefined      // NaN
    // 심볼 타입
    + Symbol()       // TypeError: Cannot convert a Symbol value to a number
    // 객체 타입
    + {}             // NaN
    + []             // 0
    + [10, 20]       // NaN
    + (function () { }) // NaN

if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');

// 2 4

if (!false) console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null) console.log(null + ' is falsy value');
if (!0) console.log(0 + ' is falsy value');
if (!NaN) console.log(NaN + ' is falsy value');
if (!'') console.log('' + ' is falsy value');

// 주어진 인자가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
}

// 주어진 인자가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
    return !!v;
}

// 모두 true를 반환한다.
console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

console.log(isTruthy(true));
// 빈 문자열이 아닌 문자열은 Truthy 값이다.
console.log(isTruthy('0'));
console.log(isTruthy({}));
console.log(isTruthy([]));