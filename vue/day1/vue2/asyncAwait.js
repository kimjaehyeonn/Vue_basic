// //비동기 함수를 동기적으로 async. await
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let posts = [];
async function getPosts() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    posts = await response.json();
    console.log(posts.length);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('끝');
  }
}

// 결과값. Promise { <pending> }/진행중. 아직 fetch로 갖고 오는 중에 log를 찍어버려서. < fetch는 비동기 함수
// async 앞에 써주고 await 으로fetch 기다려
//json이란 함수도 비동기 함수다. > await 붙여주기
// 어느 지점에서 오류 났는지 매번 필요함.  try catch 문을 활용해서
getPosts();
