let inputBox = document.querySelector('#input-box');
let img = document.querySelector('img');
// inputBox.addEventListener('keypress', (event) => {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', (event) => {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', (event) => {
//   console.log('event.key: ', event.key);
//   console.log('event.keyCode: ', event.keyCode);
// });

// inputBox.addEventListener('focus', (event) => {
//   alert('focus');
// });

// inputBox.addEventListener('blur', (event) => {
//   alert('blur');
// });

// inputBox.addEventListener('change', (event) => {
//   console.log('change');
// });

img.addEventListener('error', (event) => {
  console.log('error');
  event.target.src = '../../img/apple.jpg';
});
