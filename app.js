const button = document.querySelector('button');
const output = document.querySelector('p');

function getPosition(opt){
    const promise = new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition((success)=>{
            resolve(success);
        },(error)=>{
            reject(error);
        },opt);
    });
    return promise;
};

function setTimer(duration){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Done!");
        }, duration);
    })
    return promise;
};

//while using await, add asyn at tbe begining of function
 function trackUserHandler() {
    // let positionData;
    //let timerData;
    // try{

    //      posData = await getPosition();
    //      timerData = await setTimer(2000);
    // }
    // catch(error){
    //     console.log(error);
    // }
    let posData;
    
   getPosition().then(positionData=>{
        posData = positionData;
       return setTimer(2000);
       
    })
    .catch(error=>{
        return "something went wrong !";
    })
   .then(data=>{
       //if error occurs , data ===>'something went wrong'
       console.log(data,posData);
   })
  
    //in case of using async in front of function, the following runs end!.
    console.log("Getting position ....");
    //only runs, the above codes are true!.
    //while using try and catch, in case of error in try block, The values are undefined!.
    // console.log(posData,timerData);
}

// //run the faster promise function
// Promise.race([getPosition(),setTimer(300)]).then(data=>{
//     console.log(data);
// });

//The output is an array, 
// Promise.all([getPosition(),setTimer(300)]).then(promiseData=>{
//     console.log(promiseData);
// });

//rThe output is an array includes objects.
 
// Promise.allSettled([getPosition(),setTimer(300)]).then(promiseData=>{
//     console.log(promiseData);
// })

button.addEventListener('click', trackUserHandler);


// let result = 0;
// for(let i=0;i<10000000000;i++){
//     result+=i;
// }
// console.log(result);