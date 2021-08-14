// 타입 체크

// 자바스크립트는 동적 타입이므로 변수에 어떤 값이 할당될지 예측하기 어렵다.
function sum(a, b) {
    return a + b;
}

// 어떤 타입의 인수를 전달하여야 하는지, 어떤 타입의 값을 반환해야 하는지 명확하지 않다
function sum(a, b) {
    return a + b;
}

sum('x', 'y'); // 'xy'

// 변수나 반환값의 타입을 사전에 지정하지 않는 자바스크립트의 동적 타이핑에 의한것
function sum(a, b) {
    // a와 b가 number 타입인지 체크
    return a + b;
}

// typeof
// typeof는 피연산자의 데이터 타입을 문자열로 반환한다.

typeof '';              // string
typeof 1;               // number
typeof NaN;             // number
typeof true;            // boolean
typeof [];              // object
typeof {};              // object
typeof new String();    // object
typeof new Date();      // object
typeof /test/gi;        // object
typeof function () { };  // function
typeof undefined;       // undefined
typeof null;            // object (설계적 결함)
typeof undeclared;      // undefined (설계적 결함)