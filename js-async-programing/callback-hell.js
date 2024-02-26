// User의 정보를 가져오는 비동기 함수
function getUser(userId, callback) {
  // 서버에서 유저의 정보를 가져온다고 가정
  setTimeout(() => {
    // 1초후에 서버에서 유저 정보 가져왔다고 가정
    const user = { id: userId, name: 'Henson' };
    // 가져온 유저 정보를 콜백 함수를 통해서 반환
    callback(user);
  }, 1000);
}

// 유저가 작성한 게시글을 가져오는 함수라고 가정
function getPosts(userId, callback) {
  // 서버에서 유저가 작성한 게시글을 가져온다고 가정
  setTimeout(() => {
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ];
    callback(posts);
  }, 1000);
}

// 게시글의 댓글을 가져오는 함수
function getComments(postId, callback) {
  // 게시글의 댓글을 서버로부터 받아온다고 가정
  setTimeout(() => {
    const comments = [
      { id: 1, text: 'Comment 1' },
      { id: 2, text: 'Comment 2' },
      { id: 3, text: 'Comment 3' },
    ];
    callback(comments);
  }, 1000);
}

// 유저 정보를 파라미터로 가져옴
getUser(1, (user) => {
  console.log('user: ', user);
  // 유저가 작성한 게시글의 정보를 콜백함수를 통해 가져온 인자값을 통해 가져옴
  getPosts(user.id, (posts) => {
    console.log('posts: ', posts);
    // 게시글의 댓글 정보를 콜백함술르 통해 가져온 게시글의 정보를 통해 가져옴
    getComments(posts[0].id, (comments) => {
      console.log('comments: ', comments);
    });
  });
});

// callback hell이란 비동기 작업을 처리할 때, 콜백함수가 중첩되어 코드의 가독성과 관리가 어려워지는 상황
// 한미디로 콜백의 지옥
// 이런한 callback hell은 코드가 계속 깊게 중첩되면서 복잡도가 증가하고 유지보수가 어려워지는 결과를 가져옴
// callback hell을 해결하기 위해서는 Promise와 async/await와 같은 비동기 프로그래밍 패턴을 사용하여
// 코드의 가독성을 높이고 중첩을 줄일 수 있음
