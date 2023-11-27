// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }

// let user1 = new User('Fedor', 30, true);
// let user2 = new User('Sanko', 20, false );

// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }

// let user3 = new User('Fedor', 30, {name: 'Mandalina'});

function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
    this.greeting = function() {
        console.log('Hi')
    }
}

let user3 = new User('Fedor', 30, {name: 'Mandalina'});