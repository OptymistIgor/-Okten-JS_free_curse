class User {
    constructor (name, age) {
         this.name = name;
         this.age = age;
    }
    greeting() {
        return `Hello my name is: ${this.name}`;
    }
    work() {
        return `In process...`;
    }
}

let user = new User('Was', 34);
console.log(user);
console.log(user.greeting.name());


class Customer extends User() {
    constructor(name, age,  ) {
        super(user, age);
        this.password = password;
    }

    foo_bar() {
        return super.work
    }
}

let user2 = new Customer('waswas', 31, '111');
console.log(user2.work());
console.log(user2.foo_bar());
