//asynch functions are a way to work with asynchronous 

//creating promise
const pizzaPromize = () => {
    return new Promise((reslove,reject) =>{
        //resolve and reject are callblack functions
        //what is callblack functions
        //a callblack functions is a function that is passed as an argument to another function, to be "called black" at a later time.
let order = true;

if (order) {
    setTimeout(() => {//setTimeout is used to simulate a delay
        reslove("After 5 seconds,Pizza is delivered!");
    }, 5000);
}else{

setTimeout(() =>{//setTimeout is used to simulate a delay
    reject("After 5 seconds,Pizza not delivered!");
},5000);
}
    });
};
// callinf the function with a promise
//use.then() to handle the resolved promise
//use.catch() to handle the rejected promise
pizzaPromize()
.then((result) =>{
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

console.log("Waiting for your pizza....");
//Terminology
//Promise:An Object that represents the eventual
//completion (or failure) of an asynchronous operation and its resulting value.
//Resolve:A callback function that is used to when the promise is fulfilled.
//Reject:A callback function that is used when the promise is rejected.
//.then (): A method that is used to handle the resolved promise.
//.catch(): a method that is used to handle the rejected promise.

