/**
 * fetch API는 비동기로 작동하는 API이며, HTTP 통신을 할 때 사용함
 * fetch API는 response로 Promise 객체를 반환함.
 * 쉽게 말해서, 서버로부터 자원을 달라고 약속을 하고, 약속을 반환하는 것
 */

// 테스트 데이터를 가져올 수 있도록, 더미 데이터를 요청
// 아래의 더미 데이터는 todo 목록을 다섯 개 요청함
// fetch('https://jsonplaceholder.typicode.com/todos?_limit=5') // Promise 객체를 반환하기 때문에 fetch()에서 바로 then()을 받을 수 있음
fetch('https://jsonplaceholder.typicode.com2222/todos?_limit=5') // 잘못된 url로 요청할 경우
  .then((response) => {
    return response.json(); // 데이터를 json 형식으로 받기 위해서 json() 메소드를 호출하고 promise chaining을 통해 값을 넘김.
  })
  .then((data) => {
    console.log('data: ', data);
    // id가 3 이상인 것을 필터링
    return data.filter((obj) => obj.id > 3);
  })
  .then((result) => {
    // id가 3 이상인, 4와 5가 출력됨
    console.log('result: ', result);
  })
  .catch((err) => {
    // 잘못된 url을 요청할 경우 catch가 실행됨.
    console.log('err: ', err);
  })
  .finally(() => {
    console.log('finally');
  });

/**
 * promise chaining은 Promise 객체의 메소드를 연속적으로 호출한 것을 말하며,
 * 여러 개의 Promise를 연속적으로 연결하여 작업을 순차적으로 실행하고 결과를 다루는 방식
 */
