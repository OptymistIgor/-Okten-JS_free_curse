let users = [
    {name: 'Ivan', age:50, status: true},
    {name: 'Bogdana', age:14, status: true},
    {name: 'Igor', age:42, status: true},
    {name: 'Ira', age:30, status: true}, 
 ];
 

 function filter(array, predictionFn){

 }

 filter(users, (user) => user.status);
 console.log(filter(users, (user)=>user.age > 30));