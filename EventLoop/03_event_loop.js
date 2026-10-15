// import {readFile} from "fs"
const {readFile}=require("fs")
setTimeout(() => {
    console.log("1 settimeout");
    setImmediate(()=>console.log("inner set immediate  of timeout")
    )
}, 0);

readFile("./file.txt","utf-8",(err,data)=>{
    console.log("1st read file",data);
    setTimeout(() => {
        console.log("inner set timeout of read");
    }, 0);
    Promise.reject("safd").catch((e)=>console.log(e))

    
})

Promise.resolve('res').then(()=>console.log()
)