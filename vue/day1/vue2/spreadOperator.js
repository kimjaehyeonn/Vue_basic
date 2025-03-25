/**spread operator */

let obj = { name: '김재현', hobby: '산책' };
let obj2 = obj;
// obj는 힙주소를 할당, obj2는 힙주소 공유

console.log(obj2 === obj); // true

let obj3 = { ...obj }; //spread opeartor
console.log(obj3);

console.log(obj2 === obj3); //false_주소가 다르니까

//배열
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
console.log(arr1 === arr2); //true_참조주소를 공유하니까

let arr3 = [...arr1];
console.log(arr3);

console.log(arr1 === arr3); //false_주소가 다르니까.
console.log(arr1[1] === arr3[1]); //true_결과값이 같으니까
