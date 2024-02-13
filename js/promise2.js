const myPromise = new Promise((resolve, reject) => {
    const text = prompt('1을 입력해주세요.');
    console.log(text);1
    if(text == 1) {
        resolve('ok');
    } else {
        reject('err');
    }
})

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('끝');
    })