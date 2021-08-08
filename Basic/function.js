// Function 함수

/*
함수란 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록
동일한 작업을 반복적으로 수행 => 미리 정의된 함수를 재사용
객체 생성, 객체의 행위 정의(메소드), 정보 은닉, 클로저, 모듈화 등의 기능을 수행
*/
// 함수의 정의(함수 선언문)
function square(number) {
    return number * number;
}
// 함수의 호출
square(2); // 4

/* 함수 정의
함수 선언문
함수 표현식
Function 생성자 함수
*/

/* 함수 선언문
함수명
매개변수 목록
함수 몸체
*/

// 함수 선언문
function square(number) { // 함수명 square , 매개변수 number
    return number * number; // 함수 몸체
}

/* 함수 표현식
무명의 리터럴로 표현이 가능하다.
변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
함수의 파라미터로 전달할 수 있다.
반환값(return value)으로 사용할 수 있다.
함수명을 생략할 수 있다. => 익명 함수
*/

// 기명 함수 표현식(named function expression)
var foo = function multiply(a, b) {
    return a * b;
};

// 익명 함수 표현식(anonymous function expression)
var bar = function (a, b) {
    return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // Uncaught ReferenceError: multiply is not defined

// 함수 호출시 함수명이 아니라 함수를 가리키는 변수명을 사용
var foo = function (a, b) {
    return a * b;
};

var bar = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100

/* Function 생성자 함수
함수 선언문과 함수 표현식은 모두 함수 리터럴 방식으로 함수를 정의
=> 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand(축약법)이다.
*/

new Function(arg1, arg2, ...argN, functionBody)

var square = new Function('number', 'return number * number');
console.log(square(10)); // 100

/* 함수 호이스팅 Hoisting
자바스크립트는 ES6의 let, const를 포함하여 모든 선언
(var, let, const, function, function*, class)을 호이스팅(Hoisting)한다.
*/
var res = square(5);

function square(number) {
    return number * number;
}

// 변수 호이스팅
// TypeError: square is not a function
var res = square(5);

var square = function (number) {
    return number * number;
}

/* 일급 객체
생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 
프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상을 의미

무명의 리터럴로 표현이 가능하다.
변수나 자료 구조(객체, 배열 등)에 저장할 수 있다.
함수의 매개변수에 전달할 수 있다.
반환값으로 사용할 수 있다.
*/

// 1. 무명의 리터럴로 표현이 가능하다.
// 2. 변수나 자료 구조에 저장할 수 있다.
var increase = function (num) {
    return ++num;
};

var decrease = function (num) {
    return --num;
};

var predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
    var num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

var increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

var decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

/* 매개변수
매개변수(parameter, 인자) vs 인수(argument)
매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며
함수에 전달한 인수는 매개변수에 할당된다.
만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화된다.
*/
var foo = function (p1, p2) {
    console.log(p1, p2);
};

foo(1); // 1 undefined


/* Call-by-value (값에 의한 호출)
 함수 호출 시 원시 타입 인수를 함수에 매개변수로 전달할 때 
 매개변수에 값을 복사하여 함수로 전달하는 방식
 이때 함수 내에서 매개변수를 통해 값이 변경되어도 
 전달이 완료된 원시 타입 값은 변경되지 않는다.
*/
function foo(primitive) {
    primitive += 1;
    return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0


/* Call-by-reference (참조에 의한 호출)

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/