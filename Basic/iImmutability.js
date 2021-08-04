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