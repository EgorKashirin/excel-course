console.log("module JS");
console.log("222 222 222");

async function start(){
    return await Promise.resolve('async working')
}

start().then(console.log)