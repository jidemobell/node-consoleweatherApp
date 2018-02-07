console.log('Starting app');

setTimeout(()=>{
   console.log('Inside of callback');
},2000);

setTimeout(()=>{
    console.log('no callback');
},0);

console.log('Finishing app');

// by using non blocking IO we didnt have wait 2 seconds for the last 
// console.log
// mean the first and last console prints and then when
// the 2 seconds is up
// the last one prints