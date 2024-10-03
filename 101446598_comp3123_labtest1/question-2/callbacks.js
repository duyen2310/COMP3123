// const resolvedPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success ={'message': 'resolved success!'}
//             resolve(success);
//             console.log(success)
//         }, 500);
//     });
// }

const resolvedPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        let success ={'message': 'resolved success!'}
        resolve(success);
    }, 500)
})

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("{ error: delayed exception}" ));
    }, 500);
})


resolvedPromise.then((res)=>{
    console.log(res)
})


rejectedPromise.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.error(error.message)
})

// // Call resolvedPromise and handle the result
// resolvedPromise()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// // Call rejectedPromise and handle the error
// rejectedPromise()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
