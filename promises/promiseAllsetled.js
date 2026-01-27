function promiseAllSettled(task,rejected){
    return new Promise((resolve,reject)=>{
        if(rejected){
            resolve(`${task}`)
        }
        else{
            reject(`${task}`)
        }
    })
}

const url =[
    promiseAllSettled('get users',true),
    promiseAllSettled('fail to load',false),
    promiseAllSettled('upload student image',true),
    promiseAllSettled('nothing to do',false),
]

Promise.allSettled(url)
.then(data => console.log(data))
.catch(console.error)