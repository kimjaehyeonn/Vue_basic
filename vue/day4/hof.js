// 배열과 함께 사용되는 고차함수
let numbers = [50, 40, 30, 20, 11];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

// 배열과 함께 사용되는 고차함수(함수가 실행된 이후 어떤 값들이 반환되는 지 확인해보자)
// forEach, find, findIndex,
// some, every, filter, map
// flatmap, sort, reduce

// 1. forEach(item,i,arr)_i,arr은 선택사항
const fruits = ['apple', 'banana', 'strawberry', 'mango'];
fruits.forEach((item, i, arr) => {
  console.log(item, i, arr);
});

const item1 = { name: 'gimbap', price: '1000' };
const item2 = { name: 'odeng', price: '1500' };
const item3 = { name: 'kimchi', price: '3000' };
const item4 = { name: 'gimbap', price: '4000' };

const products = [item1, item2, item3, item4];

// 2. find: 조건에 맞는 아이템을 찾을 때
let find1 = products.find((item) => item.name === 'gimbap');
console.log('find--', find1);

// 3. findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스 반환
find1 = products.findIndex((item) => item.name === 'gimbap');
console.log('findIndex--', find1);

// 4. some: 배열의 item들이 부분적으로 조건에 맞는지 확인, 반환값은 boolean
find1 = products.some((item) => item.name === 'gimbap');
console.log('some-', find1);

// 5. every: 배열의 item들이 전체적으로 조건에 맞는지 확인, 반환값은 boolean
find1 = products.every((item) => item.name === 'gimbap');
console.log('every--', find1);

// 6. filter: 조건에 맞는 아이템을 새로운 배열로 반환. 반환값은 배열
find1 = products.filter((item) => item.name === 'gimbap');
console.log('filter--', find1);

// 7. map: 새로운 배열
let numbers2 = [50, 40, 30, 20, 11];
let result = numbers2.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log('map--', result);

// 8. flatmap: 중첩된 배열을 새로운 배열로 flat하게 만들어 줌
result = result.flatMap((item) => [1, 2]);
console.log(result);

result = ['test'].flatMap((text) => text.split(''));
console.log(result);

// 9. sort
const num = [0, 5, 20, 15, 4];
let test = num.sort((a, b) => a - b); // 오름차순
console.log(test);

let test2 = num.sort((a, b) => b - a); // 내림차순
console.log(test2);

// 10. reduce: 장바구니 안 모든 상품과 원래 가격을 곱한 값이 실제 결제값. 토탈 계산할 때 활용
let test3 = num.reduce((sum, v) => (sum += v), 0); //0은 시작값.
console.log(test3);
