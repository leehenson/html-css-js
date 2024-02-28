// Promise chaining으로 callback hell 해결

/**
 * callback hell은 콜백함수가 중첩적으로 사용되어 가독성이 떨어지는 문제
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
        const user = { id: userId, name: 'Henson' };
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

// // 유저 정보를 파라미터로 가져옴
// getUser(1, (user) => {
//   console.log('user: ', user);
//   // 유저가 작성한 게시글의 정보를 콜백함수를 통해 가져온 인자값을 통해 가져옴
//   getPosts(user.id, (posts) => {
//     console.log('posts: ', posts);
//     // 게시글의 댓글 정보를 콜백함술르 통해 가져온 게시글의 정보를 통해 가져옴
//     getComments(posts[0].id, (comments) => {
//       console.log('comments: ', comments);
//     });
//   });
// });

// callback hell 문제 개선

getUser(1)
  .then((user) => {
    console.log('user: ', user);
    return getPosts(user.id); // getUser()로 전달 받은 Promise 객체 user의 id를 인자로 getPosts() 호출하여 결과값을 반환
  })
  .then((posts) => {
    console.log('posts: ', posts);
    return getComments(posts[0].id); // 첫 번째 게시글의 id를 인자로 getComments() 호출하여 결과값을 반환
  })
  .then((comments) => {
    console.log('comments: ', comments);
  })
  .catch((err) => console.log('err: ', err))
  .finally(() => console.log('finally'));
