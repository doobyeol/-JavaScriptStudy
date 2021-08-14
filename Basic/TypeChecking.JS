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

// Object.prototype.toString
// Object.prototype.toString 메소드는 객체를 나타내는 문자열을 반환한다.

var obj = new Object();
obj.toString(); // [object Object]

Object.prototype.toString.call('');             // [object String]
Object.prototype.toString.call(new String());   // [object String]
Object.prototype.toString.call(1);              // [object Number]
Object.prototype.toString.call(new Number());   // [object Number]
Object.prototype.toString.call(NaN);            // [object Number]
Object.prototype.toString.call(Infinity);       // [object Number]
Object.prototype.toString.call(true);           // [object Boolean]
Object.prototype.toString.call(undefined);      // [object Undefined]
Object.prototype.toString.call();               // [object Undefined]
Object.prototype.toString.call(null);           // [object Null]
Object.prototype.toString.call([]);             // [object Array]
Object.prototype.toString.call({});             // [object Object]
Object.prototype.toString.call(new Date());     // [object Date]
Object.prototype.toString.call(Math);           // [object Math]
Object.prototype.toString.call(/test/i);        // [object RegExp]
Object.prototype.toString.call(function () { }); // [object Function]
Object.prototype.toString.call(document);       // [object HTMLDocument]
Object.prototype.toString.call(argument);       // [object Arguments]
Object.prototype.toString.call(undeclared);     // ReferenceError

function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

getType('');         // String
getType(1);          // Number
getType(true);       // Boolean
getType(undefined);  // Undefined
getType(null);       // Null
getType({});         // Object
getType([]);         // Array
getType(/test/i);    // RegExp
getType(Math);       // Math
getType(new Date()); // Date
getType(function () { }); // Function

function sum(a, b) {
    // a와 b가 number 타입인지 체크
    if (getType(a) !== 'Number' || getType(b) !== 'Number') {
        throw new TypeError('파라미터에 number 타입이 아닌 값이 할당되었습니다.');
    }
    return a + b;
}

console.log(sum(10, 20));   // 30
console.log(sum('10', 20)); // TypeError

function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

function isString(target) {
    return getType(target) === 'String';
}

function isNumber(target) {
    return getType(target) === 'Number';
}

function isBoolean(target) {
    return getType(target) === 'Boolean';
}

function isNull(target) {
    return getType(target) === 'Null';
}

function isUndefined(target) {
    return getType(target) === 'Undefined';
}

function isObject(target) {
    return getType(target) === 'Object';
}

function isArray(target) {
    return getType(target) === 'Array';
}

function isDate(target) {
    return getType(target) === 'Date';
}

function isRegExp(target) {
    return getType(target) === 'RegExp';
}

function isFunction(target) {
    return getType(target) === 'Function';
}

// instanceof
// HTMLElement를 상속받은 모든 DOM 요소에 css 프로퍼티를 추가하고 값을 할당한다.
function css(elem, prop, val) {
    // type checking...
    elem.style[prop] = val;
}

css({}, 'color', 'red');
// TypeError: Cannot set property 'color' of undefined

function Person() { }
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

function isString(target) {
    return getType(target) === 'String';
}

function isElement(target) {
    return !!(target && target instanceof HTMLElement);
    // 또는 `nodeType`을 사용할 수도 있다.
    // return !!(target && target.nodeType === 1);
}

// HTMLElement를 상속받은 모든 DOM 요소에 css 프로퍼티를 추가하고 값을 할당한다.
function css(elem, prop, val) {
    // type checking
    if (!(isElement(elem) && isString(prop) && isString(val))) {
        throw new TypeError('매개변수의 타입이 맞지 않습니다.');
    }
    elem.style[prop] = val;
}

css(document.querySelector('p'), 'color', 'red');
css(document.querySelector('div'), 'color', 'red');
// TypeError: 매개변수의 타입이 맞지 않습니다.

console.log(Array.isArray([]));    // true
console.log(Array.isArray({}));    // false
console.log(Array.isArray('123')); // false

console.log(undefined == null)
const isArrayLike = function (collection) {
    // 배열 인덱스: 32bit 정수(2의 32제곱 - 1)
    // 유사 배열 인덱스: 자바스크립트로 표현할 수 있는 양의 정수(2의 53제곱 - 1)
    const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
    // 빈문자열은 유사배열이다. undefined == null => true
    const length = collection == null ? undefined : collection.length;
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

// true
console.log(isArrayLike([]));
console.log(isArrayLike('abc'));
console.log(isArrayLike(''));
console.log(isArrayLike(document.querySelectorAll('li')));
console.log(isArrayLike(document.getElementsByName('li')));
console.log(isArrayLike({ length: 0 }));
(function () {
    console.log(isArrayLike(arguments));
}());

// false
console.log(isArrayLike(123));
console.log(isArrayLike(document.querySelector('li')));
console.log(isArrayLike({ foo: 1 }));
console.log(isArrayLike());
console.log(isArrayLike(null));