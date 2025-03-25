// 구조 분해 할당
let arr = [10, 20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[1]);

// let a1 = arr[0];
// let a2 = arr[1];

let [a1, a2, a3] = arr;

let person = {
  name: '홍길동',
  age: 20,
};
let { name: n, age: a } = person;
console.log(name);
console.log(age);
