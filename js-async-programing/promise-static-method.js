/**
 * 1] Promise.resolve()
 * 주어진 값을 가지고 이행(fulfilled)되는 프로미스 객체를 생성하는 역할
 * Promise.resolve()는 어떤 비동기 작업을 수행하고 그 결과를 Promise를 다루고 싶을 떄, 유용하게 사용됨
 */

const promiseResolve = Promise.resolve(100);

console.log(promiseResolve);
promiseResolve
  .then((value) => value / 2)
  .then((value) => value / 10)
  .then(console.log);

/**
 * 2] Promise.reject()
 * 주어진 값을 가지고 거부(rejected)된 상태의 Promise 객체를 생성할 때 사용
 * Promise.reject() 같은 경우에는 Promise error를 반환할 때 사용할 수 있음
 */

const promiseReject = Promise.reject('error message');
promiseReject.catch(console.error);

function fetchData() {
  return fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((response) => response.json()) // json 형태의 데이터를 반환
    .then((data) => {
      if (data.length === 5) {
        // data의 길이가 0이라면
        return Promise.reject('데이터가 없습니다.'); // 데이터가 없다는 Promise를 반환
      }
      return data; // data 길이가 0 이상이라면 data를 반환
    });
}

fetchData().then(console.log).catch(console.error);

/**
 * 3] Promise.all()
 * 여러 개의 Promise를 동시에 실행할 때 사용하며,
 * 병렬로 여러 개의 비동기 작업을 수행할 때 유용함
 * 모든 Promise가 성공적으로 이행(fulfilled)되면 그 결과값을 배열로 반환하고
 * 하나라도 거부(rejectd)되면 그 거부된 이유(reason)를 반환
 */

const promise1 = Promise.resolve(1000);
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3000);
  }, 3000);
});
const promise3 = fetch(
  'https://jsonplaceholder.typicode.com/todos?_limit=5&_delay=2000'
).then((response) => response.json());
const promise4 = Promise.reject('fail');

Promise.all([promise1, promise2, promise3, promise4])
  .then(console.log)
  .catch(console.error);

/**
 * 4] Promise.allSettled()
 * 여러 개의 함수를 동시에 실행하고, 모든 Promise가 이행되거나 거부될 떄까지 기다리는 역할
 * Promise.all()과 비슷하나 모든 Promise가 이행되거나 거부될 떄까지 기다림
 * Promise.all()은 여러 개의 함수 중 하나라도 거부되면 catch로 떨어지는데,
 * Promise.allSettled()는 거부가 되던 이행이 되던 그러한 상태를 가지고 기다림
 */

Promise.allSettled([promise1, promise2, promise3, promise4]).then(console.log);

// Promise중 하나라도 거부된 상태여도 then()으로 출력이 잘 실행되고,
// 그 결과에 각각의 Promise의 이행되었는지, 거부되었는지 상태와 이행되었으면 값을 거부되었으면 이유를 반환함

/**
 * 5] Promise.any()
 * 여러 개의 Promise를 동시에 실행하고, 그 중 하나라도 이행되면 해당 Promise의 값을 반환함
 * 모든 Promise가 거분된 경우에만, 전체 Promise가 거부됨
 * 모든 Promise중에서 가장 빨리 이행된 값을 반환함
 */

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3000);
  }, 3000);
});
const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 500);
});
const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1000);
  }, 1000);
});

Promise.any([promise5, promise6, promise7])
  .then(console.log)
  .catch(console.error);

/**
 * 6] Promise.race()
 * 가장 빨리 처리되는 Promise의 값을 반환하는 메소드
 * 가장 빨리 처리된 Promise가 이행이 되든 거부가 되든 그 값을 반환함
 */

Promise.race([promise5, promise6, promise7])
  .then(console.log)
  .catch(console.error);
