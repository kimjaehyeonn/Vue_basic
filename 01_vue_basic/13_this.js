let obj = { result: 0 };

//JavaScript의 this 바인딩 문제
// 일반 함수는 호출될 때 this가 전역 객체를 참조함
// obj.add = function (x, y) {
//   function inner() {
//     this.result = x + y;
//   }

//   inner();
// };
// obj.add(3, 4);

// console.log(obj);
// console.log(obj.result); //0

// console.log(result); //7

// 1. 화살표 함수
// 화살표 함수_ 여기서 this는 스코프 바깥의 obj
// obj.add = function (x, y) {
//  const inner = () => {
//     this.result = x + y;
//   }

//   inner();
// };

// obj.add(3, 4);

// console.log(obj);
// console.log(obj.result); // 7

// console.log(result); //정의 안됨

// 2. bind()
// 함수의 this 값을 특정 객체에 영구적으로 바인딩한 새로운 함수 반환
obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  inner.bind(this)();
};

obj.add(3, 4);

console.log(obj);
console.log(obj.result); // 7
