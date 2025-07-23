// async function  getData() {
//     return "namaste"
// }

// getData().then(res=>console.log(res))


// const p = new Promise((resolve,reject)=>{
//     resolve('rresolved')
// }) 

// async function  getData() {
//     return p
// }

// getData().then(res=>console.log(res))


const p = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('resolved p1')

    }, 10000)
})


const pp = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('resolved p2')

    }, 5000)
})


async function getData() {
    console.log("dont wiat")
    const val = await pp
    console.log(val)
    console.log("hey")
    console.log(await p)
}

getData()

// p.then((res)=>{
//     console.log(res)
// })


/////////////////////////////////////////////////////////////////////////////////

//fetch

// const api = "https://api.github.com/users/josnamathew03"

// async function handlePromise() {
//     const response = await fetch(api)
//     const res = await response.json()
//     console.log(res)
// }
// handlePromise()

//////////////////////////////////////////////////////////////////////////

//try catch

const api2 = "https://api.github.com/users/josnamathew03"

async function handlePromise() {
    try {
        const response = await fetch(api2)
        const res = await response.json()
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
    
}                                                    
handlePromise() 

                                                                        
                        
                                                   
                         
                                                                                                          
                                      
                          