let user = {
    name: 'Fedor',
   skills: ['html', 'js'],
   greeteeng: function() {
    console.log('Hello');
   }
}

let userClone = {...user};

let toJson = JSON.stringify(user);
console.log(s);

// let json = '{"name": "Fedor", "skills": ["html", "js"]}'

let jsonTo = JSON.parse(toJson)
console.log(jsonTo);
