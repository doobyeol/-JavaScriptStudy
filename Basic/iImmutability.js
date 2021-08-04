// 객체와 변경불가성(Immutability)

/* 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴
불변 객체를 사용하면 복제나 비교를 위한 조작을 단순화 할 수 있고 성능 개선에도 도움이 된다.
하지만 객체가 변경 가능한 데이터를 많이 가지고 있는 경우 오히려 부적절한 경우가 있다.
*/

//Javascript의 원시 타입(은 변경 불가능한 값이다.
Boolean
null
undefined
Number
String
//Symbol(New in ECMAScript 6)

// 원시 타입 이외의 모든 값은 Object타입이며 객체 타입은 변경 가능한 값(mutable value)이다.
// => 객체는 새로운 값을 다시 만들 필요없이 직접 변경이 가능하다는 것

var statement = 'I am an immutable value'; // string은 immutable value

var otherStr = statement.slice(8, 17);

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'
// slice() 메소드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환
// 문자열은 변경할 수 없는 immutable value

var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1

// 처리 후 결과의 복사본을 리턴하는 문자열의 메소드 slice()와는 달리 배열(객체)의 메소드 push()는 직접 대상 배열을 변경
// 그 이유는 배열은 객체이고 객체는 immutable value가 아닌 변경 가능한 값이기 때문이다.

var user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var myName = user.name; // 변수 myName은 string 타입이다.

user.name = 'Kim';
console.log(myName); // Lee

myName = user.name;  // 재할당
console.log(myName); // Kim

var user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

var user2 = user1; // 변수 user2는 객체 타입이다.

user2.name = 'Kim';

console.log(user1.name); // Kim
console.log(user2.name); // Kim

// user2의 name 프로퍼티에 새로운 값을 할당하면 객체는 변경 불가능한 값이 아니므로 객체 user2는 변경된다. 
// 객체 user1도 동시에 변경된다. 이는 user1과 user2가 같은 어드레스를 참조하고 있기 때문


/* 불변 데이터 패턴(immutable data pattern)
객체의 방어적 복사 Object.assign
불변객체화를 통한 객체 변경 방지 Object.freeze

Object.assign
타킷 객체로 소스 객체의 프로퍼티를 복사
소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타켓 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기된다
리턴값으로 타킷 객체를 반환
ES6에서 추가된 메소드이며 Internet Explorer는 지원하지 않는다.
*/

// Syntax
Object.assign(target, ...sources);

// Copy
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
console.log(obj == copy); // false

// Merge
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const merge1 = Object.assign(o1, o2, o3);

console.log(merge1); // { a: 1, b: 2, c: 3 }
console.log(o1);     // { a: 1, b: 2, c: 3 }, 타겟 객체가 변경된다!

// Merge
const o4 = { a: 1 };
const o5 = { b: 2 };
const o6 = { c: 3 };

const merge2 = Object.assign({}, o4, o5, o6);

console.log(merge2); // { a: 1, b: 2, c: 3 }
console.log(o4);     // { a: 1 }

const user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan

/* Object.freeze
불변(immutable) 객체

*/

const user1 = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, { name: 'Kim' });

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)); // true

const user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

Object.freeze(user);

user.address.city = 'Busan'; // 변경된다!
console.log(user); // { name: 'Lee', address: { city: 'Busan' } }

// deep freeze 내부 객체까지 변경 불가
function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);

    props.forEach((name) => {
        const prop = obj[name];
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}

const user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

deepFreeze(user);

user.name = 'Kim';           // 무시된다
user.address.city = 'Busan'; // 무시된다

console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }


/* Immutable.js
Facebook이 제공하는 Immutable.js
Immutable.js는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 (Permit Immutable) 데이터 구조를 제공
$ npm install immutable
*/
const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50