function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name
        },
        getAge() {
            return user.age
        },
        setAge(age) {
            if(age > 0){
                user.age = age;
            }
        },
    }

}

let builder = userBuilder('Vasvas', 30);
builder.setAge(40)
console.log()