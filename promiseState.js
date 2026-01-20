// const p = Promise.resolve();
// const state = await getState(p); // === "fulfilled"

// const p = Promise.reject();
// const state = await getState(p); // === "rejected"

// const p = new Promise(() => {});
// const state = await getState(p); // === "pending"

async function getState(promise) {
    if(await PromiseStatus(promise) === "pending"){
        console.log('pending')
    }
    else if( await PromiseStatus(promise) === "fulfilled"){
        console.log('fulfilled')
    }
    else{
        console.log('rejected')
    }
}
const p1 = Promise.resolve();
const state1 = await getState(p1); // === "fulfilled"

const p2 = Promise.reject();
const state2 = await getState(p2); // === "rejected"

const p3= new Promise(() => {});
const state3 = await getState(p3); // === "pending"
console.log(state1)
console.log(state2)
console.log(state3)