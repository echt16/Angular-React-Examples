// const http = require("http");
// http.createServer(function (request, response) {
//     response.end("Hello NodeJS!");
// }).listen(3000, "127.0.0.1", function () {
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });

// const os = require("os");
// const greeting = require("./greeting");
// let userName = os.userInfo().username;
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const User = require('./user.js');
// let user = new User('allo', 50);
// user.sayHi();

// const greeting = require('./greeting2');
// console.log(`Hello, ${greeting.name}`);
// const greeting2 = require('./greeting2');
// greeting.name = 'allu';
// console.log(`Hello, ${greeting.name}`);
// console.log(`Hello, ${greeting2.name}`);


// const welcome = require('./welcome');
// welcome.getMorningMessage();
// welcome.getEveningMessage();

// const greeting = require("./greeting3");
// global.name = "Serhii";
// global.console.log(date);
// console.log(greeting.getMessage());

let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);