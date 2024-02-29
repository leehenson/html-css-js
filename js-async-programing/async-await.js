/**
 * async/await는 자바스크립트의 비동기 처리 패턴 중의 하나이며,
 * Promise의 syntatic sugar 즉, 문법적 설탕이다.
 * syntatic sugar는 코드를 더 읽기 쉽게 작성하고 이해할 수 있도록 도와주는 문법적인 표현 방식
 * async/await를 사용하면 비동기 코드를 더 읽기 쉽게 작성할 수 있다.
 */

// User의 정보를 가져오는 비동기 함수
function getUser(userId) {
  // getUser() 메소드에서 약속이 담긴 Promise 객체를 반환하도록 함
  return new Promise((resolve, reject) => {
    // error가 발생할 수 있는 상황이라면, catch() 절을 통해 에러가 났을 때, reject() 함수를 통해 error 객체를 넘김.
    try {
      // 서버에서 유저의 정보를 가져온다고 가정
      setTimeout(() => {
        // 1초후에 서버에서 유저 정보 가져왔다고 가정
        // userId가 1일 경우에만, user 객체를 넣어줌
        const user = userId === 1 ? { id: userId, name: 'Henson' } : null;
        // 가져온 유저 정보를 콜백 함수를 통해서 반환
        // callback(user);
        resolve(user); // 이행이 되었을 때, resolve()로 user 객체를 넘김.
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}

// 유저가 작성한 게시글을 가져오는 함수라고 가정
function getPosts(userId) {
  return new Promise((resolve, reject) => {
    try {
      // 서버에서 유저가 작성한 게시글을 가져온다고 가정
      setTimeout(() => {
        const posts = [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
        ];
        // callback(posts);
        resolve(posts);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}

// 게시글의 댓글을 가져오는 함수
function getComments(postId) {
  return new Promise((resolve, reject) => {
    // 게시글의 댓글을 서버로부터 받아온다고 가정
    setTimeout(() => {
      const comments = [
        { id: 1, text: 'Comment 1' },
        { id: 2, text: 'Comment 2' },
        { id: 3, text: 'Comment 3' },
      ];
      resolve(comments);
    }, 1000);
  });
}

function runPromise() {
  // 함수 안에서 getUser()를 호출
  getUser(0)
    .then((user) => {
      if (user) {
        // user라는 객체가 있다면
        console.log('user: ', user); // 객체를 콘솔에 출력
      } else {
        // user라는 객체가 없다면
        console.log('유저가 없어요.'); // 유저가 없다는 문자열 출력
      }
    })
    .catch((err) => {
      // Promise를 사용할 경우에 에러 처리를 catch() 메소드로 함
      console.log('err: ', err);
    });
}

// runPromise();

// asycn는 비동기 작업을 처리하는 함수를 정의할 때 사용
// async를 선언하게 되면 선언한 함수의 return의 결과는 Promise 객체임
async function runAsyncAwait() {
  try {
    // await은 async 함수 내부에서 비동기 작업의 결과를 기다리는 역할
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log('user: ', user);
    console.log('posts: ', posts);
    console.log('comments: ', comments);
    return user;
  } catch (error) {
    // async/await를 사용할 때에는 try/catch의 catch 블록을 통해 에러를 처리할 수 있음
    console.log('error: ', error);
  }
}

console.log('start');
runAsyncAwait().then((user) => {
  console.log('user: ', user);
});
console.log('end');
