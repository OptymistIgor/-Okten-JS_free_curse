// let user = {
//     name: ' Vasja',
//     age: 31
// }

// let userCopy = {...user};
// console.log(userCopy);
// console.log(userCopy === user);
// userCopy.age = 10;
// console.log(userCopy);
// console.log(user);

let nums = [11, 22, 33];
// let nums2 = nums;
// console.log(nums === nums2);
let nums2 = [...nums];
// один із способів копіювати об'єкти в JS.
console.log(nums === nums2);

