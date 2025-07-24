// console.log('running') 
 const xhr = new XMLHttpRequest();
 xhr.addEventListener('load',()=>{
    console.log(xhr.response)
 })
 xhr.open('GET',  'https://jsonplaceholder.typicode.com/posts/1')
 xhr.send()
 xhr.response