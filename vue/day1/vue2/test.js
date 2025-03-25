async function getPosts() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log(response);
}
getPosts();
