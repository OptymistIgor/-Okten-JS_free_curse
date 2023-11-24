// let nameUser = 'Vasja';
// let ageUser = 31;
// let user = {
// nameUser,
// ageUser,
//     foo() {
//         console.log(this)
//     },
//     wife () {
//         name: 'Anna'
//     }
// }
// console.log(user)
// console.log(user.foo())

// let {name: userName,age: userAge, wife:{name: wifeName}, wife } = user;
// console.log(userName, userAge)
// console.log(wife)

// let arr = [11, 22, 33];
// let [a, b] = arr;

// let [a, b] = [11, 22, 33];
// let [a, b, c] = [11, 22, 33];
// let [a, , c] = [11, 22, 33];
// console.log(a, c);
// 11, 33

let users = [
    {name: 'Ivan', age:50, status: true},
    {name: 'Bogdana', age:14, status: true},
    {name: 'Igor', age:42, status: true},
    {name: 'Ira', age:30, status: true}, 
 ];

 let [ , user2] = users;
//  let [{name: userName, age: userAge, status: userStatus}, user2] = users; // No work.
 console.log(user1);
 console.log(user2);
