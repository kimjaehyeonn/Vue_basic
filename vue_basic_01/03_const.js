//const 일때 속성 변경은 가능 but 객체 재할당은 불가

const p1 = { name: 'john', age: 20 }; //const 는 상수 주소값 불변
p1.age = 22; // 주소값 안의 특성을 바꾼다고 주소를 바꾸지 않으니  ok!
console.log(p1);

p1 = { name: 'lee', age: 25 }; // 새로운 객체를 생성하고 주소값을 할당하려니 오류
