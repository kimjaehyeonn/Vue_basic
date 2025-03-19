/**array */
const animals = ['bear', 'tiger', 'giraffe', 'elephant', 'lion'];

//1. 기본적인 구조분해할당_인덱스 할당_순서 중요
// const [ani1, ani2, ani3] = animals;
// console.log(ani1, ani2, ani3);
// bear tiger giraffe

// 2. 일부 요소 건너뛰기
// const [, ani2, , ani4] = animals;
// console.log(ani2, ani4);

// 3. 기본값 설정
// const zoo = ['panda', 'koala'];
// const [ani1, ani2, ani3 = 'monkey', ani4 = 'penguin'] = zoo;
// console.log(ani1, ani2, ani3, ani4);

// 4. 중첩된 배열 구조 분해
const nestedArray = [1, [2, 3], 4];
const [num1, [num3, num4], num2] = nestedArray;
console.log(num1, num3, num4, num2);

/** object */

const user = {
  name: 'Alice',
  age: 25,
  job: 'Developer',
};

// 1. 객체 구조분해할당_ key값 핟당
// const { age, name } = user;
// console.log(name); // Alice
// console.log(age); //25

// 2. 변수 이름 변경(별칭 지정)
// const { name: userName, job: profession } = user;
// console.log(userName);
// console.log(profession);

// 3. 기본값 설정
const { salary = 5000, age: userAge = 30 } = user;
console.log(salary);
console.log(userAge); //25_30은 원래값 없을때의 기본값.

// 4.  중첩된 객체의 구조 분해
const person = {
  name: 'Bob',
  info: {
    address: 'Seoul',
    hobbise: ['reading', 'coding'],
  },
};

const {
  name: name2,
  info: {
    address,
    hobbise: [firstHobby, secondHobby],
  },
} = person;

// const {name: name2, {address: address2, [firstHobby, secondHobby]}} = person;
// const {name: name2, info[0], info[1][0]:firstHobby} = person;

console.log(`이름:${name2},첫번째 취미:${firstHobby}`);
