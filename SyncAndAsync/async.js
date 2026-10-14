console.log("Asynchronous code");
var a = 11525;
var b = 11525;

import file from 'fs';
import https from "node:https";
import crypto from 'crypto';


https.get("https://dummyjson.com/products/1", (res) => {
    console.log("api call fetched successfully");
    res.destroy();
}).on("error", (err) => {
    console.error("api call failed", err);
});

setTimeout(() => {
    console.log("set timeout works ");
}, 2000);

(function (x, y) {
    console.log(x + y)
})(a, b)

crypto.pbkdf2("password", "salt", 9000000, 50, "sha512", (err, key) => { // Async way 
    console.log(key);
})

const key=crypto.pbkdf2Sync("password", "salt", 9000000, 50, "sha512") // sync way , it block the main thread 
console.log(key);


file.readFile("myFile.txt", "utf8", (err, data) => {
    console.log("file readed successfully", err, data);
})
const filee = file.readFileSync("myFile.txt", "utf8") // this will block the main thread
console.log(filee);


console.log("hello world");
