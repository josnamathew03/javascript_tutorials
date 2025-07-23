const getTacos= true

friend()
    .then(decision)
    .catch(err=>console.log(err))


function friend() {
    return new Promise((resolve, reject) => {
        if (getTacos) {
            resolve(true)
        }
        else {
            const err = new Error("didnt get tacos")
            reject(err)
        }
    }) 
}
function decision(taco) {
    if (taco) {
        console.log("got tacos")
    }
    else {
        console.log("no tacos")

    }
}
 
 
 

 


























