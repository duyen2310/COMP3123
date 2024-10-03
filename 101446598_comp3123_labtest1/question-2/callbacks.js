const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success ={'message': 'resolved success!'}
            resolve(success);
            console.log(success)
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: rejected promise!'));
        }, 500);
    });
}

resolvedPromise()

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
