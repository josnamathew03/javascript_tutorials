// promise

// const cart = ['shoes','pants']
// const promise = createOrder(cart)


// promise.then(function(orderId){    
//     console.log(orderId)
// })   
// .catch(function(err){
//     console.log(err)
// })       

// function createOrder(cart){
//     const pr = new Promise(function(resolve,reject){
//         const orderId = 123
//         if(false){
//             resolve(orderId)
//         }
//         else{
//             const err = new Error("cart error")
//             reject(err)
//         }
//     })
//     return pr                      
// }


//////////////////////////////////////////////////////////////////////////////

//promise chaining

const cart = ['shoes', 'pants']
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId
    })
    .then((orderId) => {
        return proceedToPayment(orderId)
    })
    .then((paymentInfo) => console.log(paymentInfo))
    .catch(function (err) {
        console.log(err)
    })
    .then(() => {
        console.log("i run")
    })


function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        const orderId = 123
        if (false) {
            resolve(orderId)
        }
        else {
            const err = new Error("cart error")
            reject(err)
        }
    })
    return pr
}


function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("payment sucess")

    })
}

////////////////////////////////////////////////////////////////////////////


const courses = ['flat', 'ds']
createCourse(courses)
    .then((courseId) => viewCourse(courseId))
    .then((courseDetails) => enrollCourse(courseDetails))
    .then((paymentInfo) => paymentDetails(paymentInfo))
    .catch((err) => console.log(err))

function created() {
    return true
}


function createCourse(courses) {
    return new Promise((resolve, reject) => {
        const cId = 1234
        if (created()) {
            console.log("course created")
            resolve(cId)
        }
        else {
            const err = new Error("creation failed")
            reject(err)
        }

    })
}

function viewCourse(courseId) {
    return new Promise((resolve,reject) => {
        console.log(courseId)
        coursDetails = "dsa"
        resolve(coursDetails)
    })

}

function enrollCourse(coursDetails){
    return new Promise((resolve,reject)=>{
        console.log(coursDetails)
        resolve("paymemt status")
    })
}

function paymentDetails(paymentInfo){
    console.log(paymentInfo)
}

/////////////////////////////////////////////////////////////////////////////////////////

// Promise API

//promise.all
// const p1 = new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("p1 sucess")
//     // },3000)

//     setTimeout(()=>{
//         reject("p1 fail")
//     },3000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p2 sucess")
//     },1000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p3 sucess")
//     },2000)
// })

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })

//promise.allsettled

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p1 sucess")
//     },3000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p2 sucess")
//     },1000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("p3 sucess")
//     },2000)
// })

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })

/////////////////////////////////////////////////////////////////////////////////////////

//promise.race

// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p1 sucess")
//     },3000)
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("p2 sucess")
//     },1000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("p3 sucess")
//     },2000)
// })

// Promise.race([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })

////////////////////////////////////////////////////////////////////////

//promise.any

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p1 fail")
    },3000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p2 fail")
    },1000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p3 fail")
    },2000)
})
 
Promise.any([p1,p2,p3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
    console.log(err.errors)
})





