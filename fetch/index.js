const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("success");
    } else {
      reject(new Error("error"));
    }
  });
};

somethingWillHappen()
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => console.log(error));

const somethingWillHappenTwo = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("hello world before three seconds");
      }, 3000);
    } else {
      reject(new Error("error"));
    }
  });
};

somethingWillHappenTwo()
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));

console.log('-------------------- Promises ... -------------------------')
// execute some promise at the same time
Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
  .then((response) => console.log('Promise all ... ',response))
  .catch((error) => console.log(error));
