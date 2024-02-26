// 동기식 프로그래밍
function taskSyncFunction(callback) {
  console.log('첫 번째 작업');
  console.log('두 번째 작업');
  callback();
}

// 콜백 함수는 다른 함수의 인자로 넘겨지고, 해당 함수가 처리된 후 호출되는 함수
taskSyncFunction(() => {
  console.log('콜백 함수 실행');
});

// 동기식 프로그래밍으로 정의가 되어있기 때문에 콜백함수가 실행된 후에 "실행 완료"가 살행됨
console.log('실행 완료');

console.log('-----------------------------------------');

// 비동기식 프로그래밍
function taskAsyncFunction(callback) {
  console.log('start');
  // 자바스크립트의 비동기 함수인 setTimeout을 사용하여 비동기 프로그래밍 구현
  setTimeout(() => {
    console.log('첫 번째 작업');
    console.log('두 번째 작업');
    callback();
  }, 2000);
  console.log('end');
}

// 콜백 함수는 다른 함수의 인자로 넘겨지고, 해당 함수가 처리된 후 호출되는 함수
taskAsyncFunction(() => {
  console.log('콜백 함수 실행');
});

// 비동기식 프로그래밍으로 정의가 되어있기 때문에 setTimeout() 함수의 완료를 기다리지 않고, end 다음으로 출력됨
// 2초후 setTimeout() 함수내의 기능이 실행됨
console.log('실행 완료');
