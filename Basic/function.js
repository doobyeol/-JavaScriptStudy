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

*/

/*

*/