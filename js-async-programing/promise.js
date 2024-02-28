// Promise는 자바스크립트에서 비동기 작업을 처리하는데 사용되는 객체
// Promise는 객체이기 때문에 new 키워드와 생성자를 통해서 만들 수 있음
// ex) const myPromise = new Promise();

/**
 * Promise 객체를 생성할 때는 인자로 콜백함수를 넣을 수 있음
 * 콜백 함수 안에서 비동기 작업을 처리
 * 한마디로 어떤 작업을 처리하고 결과를 알려달라는 약속을 하는 것
 *
 * ex) const myPromose = new Promise(() => {})
 *
 * myPromise라는 객체를 통해서 약속의 결과를 받음
 *
 * 비동기 작업이 작업이 끝날 때까지 대기(pending)를 하다가
 * 비동기 작업이 완료(fulfilled)되면 약속한 결과를 반환받거나
 * 약속이 지켜지지 않으면(rejected) 다른 결과를 반환
 */

// Promise 객체 생성
// 비동기 작업을 처리할 콜백함수를 정의
const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 처리
  // 2초 후에 싱행할 비동기 작업
  setTimeout(() => {
    // 프롬프트를 통해서 입력을 받음
    const text = prompt('"hello를 입력해줘. 그러면 선물을 줄게');
    // 입력이 'hello'라면
    if (text === 'hello') {
      resolve('💻'); // Promise에서 정상적인 결과를 반환할 때는 esolve라는 함수를 통해 결과를 반환
    } else {
      // 'hello'가 아니라면
      reject('error message'); // 정상적이지 않은 결과를 반환할 때는 reject라는 함수를 통해 결과를 반환
    }
  }, 2000);
});

// resolve와 reject함수는 Promise에 콜백함수로 넘겨줬던 콜백함수의 파라미터로 전달해줌

/**
 * Promise chaining은 Promise 객체에 연속적으로 메소드를 호출하는 것
 * then() 메소드에서 리턴하는 값은 Promise 객체이다.
 * 하나의 Promise 객체에 대해서 메소드를 연속으로 호출하는 것을 Promise chaining이라고 함.
 */

// 비동기 작업 호출
myPromise // 비동기 작업이 정상적으로 처리가 되었을 때(resolve)는 then이라는 함수의 콜백함수로 확인 가능
  .then((result) => {
    console.log('result: ', result);
    return `선물은 : ${result}`; // return의 결과가 다음 then()의 파라미터로 들어감.
  })
  .then((result) => {
    console.log('result: ', result);
  })
  .catch((err) => {
    // 비동기 작업이 정상적으로 이행되지 않았을 경우(reject)에는 catch() 함수를 통해 결과를 받을 수 있음
    console.log('err: ', err);
  })
  .finally(() => {
    // 비동기 작업이 resolve되거나 reject 되었더라도 항상 실행되어야 하는 콜백 함수를 finally에 넣어줌
    console.log('finally');
  });

/**
 * Promise 객체는 상태를 갖고 있는데
 * 비동기 작업을 처리하는 중일 때는 대기(pending) 상태
 * 비동기 작업이 정상적으로 처리된 경우에는 이행(fulfilled) 상태
 * 비동기 작업이 정상적으로 처리되지 않은 경우에는 거부(rejected) 상태
 *
 * Promise 객체는 생성과 동시에 비동기 작업을 처리함
 * then()나 catch()절을 입력했을 때 비동기 작업이 처리되는 것이 아님
 */

/**
 * Promise 정리
 *
 * Promise: 비동기 작업을 처리하는 객체
 * Promise 객체는 new 키워드와 생성자 함수를 통해서 생성할 수 있다.
 * 생성을 할 때는 인자로 콜백함수를 넣을 수 있는데
 * 콜백함수 안에서 처리해야 할 비동기 코드를 작성해야 함.
 *
 * resolve: 정상적인 결과 값을 반환 (이행)
 * reject: 정상적이지 않았던 값을 반환 (거부)
 * resolve와 reject 함수는 다시 콜백함수의 파라미터로 넘겨줌.
 *
 * 상태
 * - 대기(pending): 비동기 작업을 처리하는 중
 * - 이행(fulfilled): 비동기 작업이 정상적으로 처리가 된 경우
 * - 거부(rejectd): 비동기 작업이 정상적으로 처리되지 않은 경우
 *
 * 메소드
 * - then(): 이행되었을 때
 * - catch(): 거부되었을 때
 * - finally(): 이행되거나 거부되더라도 항상 실행할 때
 */
