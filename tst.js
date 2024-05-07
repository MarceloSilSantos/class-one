const user = {
    name: "bico",
    age: 25,
};

user.age = 45;

console.log(user.name);
console.log(user.age);

const { age, name} = user;

console.log(age);
console.log(name);

