

/*
let somePromise =  new Promise((resolve, reject)=> {
setTimeout(()=>{
   // resolve('Hey it worked');
   reject('Unable to fufill promise')
},2500)
   

});


// then is only called when promise resolves
somePromise.then((message)=>{
   console.log('Success: ',message)
}, (errorMessage)=>{
    console.log('Error:', errorMessage)
})

//you can only resolve or reject promise one
//this is a good escape from callback hell

//promise pending ==> waiting
//promise settled ==> resolved or rejected
*/

const asynAdd = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(typeof a === 'number' && typeof b === 'number' ){
              resolve(a + b)
          } else{
              reject('Arguments must be numbers')
          }
        }, 1500);
    })
}

/*
asynAdd(5,'7').then((res)=> {
     console.log('Result:', res)
     return asynAdd(res,33);
}, (errorMessage)=>{
    console.log(errorMessage)
}).then((res)=> {
    console.log('second result:', res)
}, (errorMessage)=>{
   console.log(errorMessage)
})
*/

asynAdd(5,'7').then((res)=> {
    console.log('Result:', res)
    return asynAdd(res,33);
}).then((res)=> {
   console.log('second result:', res)
}).catch((errorMessage) => {
    console.log(errorMessage)
})