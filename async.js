// // js is sync/single threaded language, can only execute 1 thing at a time.

// // js achieves async behaviour using
// // callbacks - fn passed as argument to another fn,
// // set Timeout,
// // Promises.

// const fn1 = (callbackFn) => {
//   console.log("fn1 finished");
//   callbackFn();
// };

// const fn2 = () => {
//   console.log("fn2 started");
// };

// // fn1(fn2);

// // callback hell

// // getUserDetails(userId, (user) => {
// //   getUserPosts(user.userId, (posts) => {
// //     getPostComments(posts[0].postId, (comments) => {
// //       console.log("comments:", comments);
// //      }
// //    });
// //  });

// const waitSync = () => {
//   let currentTime = new Date().getTime();
//   const timeLimit = currentTime + 3000; // 3 seconds
//   while (currentTime < timeLimit) {
//     currentTime = new Date().getTime();
//   }
//   console.log("waitSync finished");
// };

// // console.log("before wait sync");
// // waitSync();
// // console.log("after wait sync");

// // setTimeout(() => {
// //   console.log("time over");
// // }, 3000); // 3 seconds

// // setTimeout(() => {
// //   console.log("time over!!!");
// // }, 0);
// // console.log("first");
// // console.log("second");
// // console.log("third");

// // Promise-
// // states - pending, fulfilled, rejected

const URL = "https://jsonplaceholder.typicode.com/users/1";

// // const userData = fetch(URL);
// // console.log("🚀 ~ userData:", userData);
// // userData.then((response) => {
// //   console.log("🚀 ~ response:", response);
// //   response.json().then((readableData) => {
// //     console.log("🚀 ~ readableData:", readableData);
// //   });
// // });

// // const rejectedPromise = Promise.reject("User not authenticated");
// // console.log("🚀 ~ rejectedPromise:", rejectedPromise);

// // rejectedPromise
// //   .then((data) => {
// //     console.log(".then callback", data);
// //   })
// //   .catch((err) => {
// //     console.log(".catch callback -", err);
// //   });

// //   promise chaining
// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((readableData) => {
//     console.log("🚀 ~ readableData:", readableData);
//   })
//   .catch((err) => {
//     console.log(".catch callback, error -", err);
//   });

const promise = new Promise((resolve, reject) => {
  resolve(123);
});

// const rejectedPromise = new Promise((res, rej) => {
//   rej("rejected promise");
// });

// // showLoader();
// // promise
// //   .then((data) => {console.log(data)})
// //   .catch((err) => {console.log(err))})
// //   .finally(() => {
// //  hideLoader();
// //   });

const myPromise = new Promise((res) => res("my Promise"));

setTimeout(() => {
  console.log("timeout");
}, 0);

fetch(URL)
  .then((data) => {
    console.log("fetch.then callback");
    return data.json();
  })
  .then((userData) => {
    console.log("Network Response", userData);
  });

console.log("first");
myPromise.then((data) => console.log(data));
console.log("second");
console.log("third");
let timer = 0;

const intervalId = setInterval(() => {
  if (timer > 5) {
    console.log("terminate interval");
    clearInterval(intervalId);
  }
  console.log(timer++);
}, 1000);
