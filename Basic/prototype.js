/* 프로토타입 객체
자바 : 클래스 기반 객체지향
객체 생성 이전에 클래스를 정의
-> 이를 통해 객체(인스턴스)를 생성

자바스크립트 : 프로토타입 기반 객체지향
클래스 없이(Class-less)도 (ECMAScript 6에서 클래스가 추가되었다) 객
체를 생성할 수 있다.

자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 
객체 지향의 상속 개념과 같이 
부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다
부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 Prototype(프로토타입)이라 한다.

*/

var student = {
    name: 'Lee',
    score: 90
};

// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(student.hasOwnProperty('name')); // true

console.dir(student);


/*
ECMAScript spec에서는 자바스크립트의 모든 객체는 [[Prototype]]이라는 인터널 슬롯(internal slot)를 가진다.
[[Prototype]]의 값은 null 또는 객체이며 상속을 구현하는데 사용된다.
[[Prototype]] 객체의 데이터 프로퍼티는 get 액세스를 위해 상속되어 자식 객체의 프로퍼티처럼 사용할 수 있다.
하지만 set 액세스는 허용되지 않는다.
*/

var student = {
    name: 'Lee',
    score: 90
}
console.log(student.__proto__ === Object.prototype); // true

// __proto__ 프로퍼티에 접근하면 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환
// student 객체는 __proto__ 프로퍼티로 자신의 부모 객체(프로토타입 객체)인 Object.prototype을 가리키고 있다.

/* */
/* */
/* */
/* */
/* */
/* */