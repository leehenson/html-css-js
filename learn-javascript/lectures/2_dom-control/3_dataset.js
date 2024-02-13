let h2 = document.querySelector('h2');
h2.dataset.test = 'hello Javascript!';
console.log('h2.dataset.test: ', h2.dataset.test);

let liList = document.querySelectorAll('li');
let img = document.querySelector('img');
let selectedItem = document.querySelector('.selected-item');

console.log('liList: ', liList);

// liList[0].addEventListener('click', () => {
//   console.log(liList[0].dataset.img);
//   img.setAttribute('src', liList[0].dataset.img);
// });

// liList[1].addEventListener('click', () => {
//   console.log(liList[1].dataset.img);
//   img.setAttribute('src', liList[1].dataset.img);
// });

// liList[2].addEventListener('click', () => {
//   console.log(liList[2].dataset.img);
//   img.setAttribute('src', liList[2].dataset.img);
// });

liList[0].addEventListener('click', selectitem);

liList[1].addEventListener('click', selectitem);

liList[2].addEventListener('click', selectitem);

function selectitem(event) {
  selectedItem.textContent = event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
}
