// 동기식 프로그래밍
function syncFunction() {
  console.log('첫 번째 작업');
  console.log('두 번째 작업');
  console.log('세 번째 작업');
}

syncFunction();

// 동기식은 코드를 순차적으로 실행하는 방식(한 작업이 끝날 때까지 다음 작업은 대기하는 방식)
// 따라서, 코드의 실행 순서를 예측하기 쉽고, 간단한 코드를 작성할 수 있다.
// 하지만, 작업이 끝날 때까지 다음 작업을 기다려야 하므로, 블록킹(다음 작업이 대기하는 상황)이 발생할 수 있다.
// 이로 인해, 작업이 느리게 처리되거나, 막히는 현상이 발생할 수 있다.

// 비동기식 프로그래밍
function asyncFunction() {
  console.log('첫 번째 작업');

  // setTimeout()은 Web API에서 지원하는 비동기 함수 중 하나로, 일정시간이 지난 후에 특정 작업을 실행하는 기능을 제공
  // setTimeout()의 파라미터로 함수를 전달하였는데, 이러한 함수를 콜백함수라고 한다.
  // 콜백함수는 함수의 파라미터로 전달되는 함수를 의미한다.
  // 콜백함수는 setTimeout() 함수가 처리된 후에 호출되는 함수
  // 콜백함수는 애로우 함수로 사용할 수 있다.
  setTimeout(() => {
    console.log('두 번째 작업');
  }, 1000); // 단위는 ms로 1000ms = 1s(초)

  console.log('세 번째 작업');
}

asyncFunction();

// 비동기식은 작업이 완료될 때까지 기다리지 않고, 바로 다음 작업을 실행하는 방식
// 따라서, 블록킹의 문제를 해결하고, 대기시간을 최소화할 수 있다.
