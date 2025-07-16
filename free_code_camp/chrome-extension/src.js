// // function saveInput(){
// //     console.log("saved")
// // }

// const inputBtn = document.getElementById("input-btn")
// const inputEl = document.getElementById("input-el")
// const ulEl = document.getElementById("ul-el")
// const delBtn = document.getElementById("del-btn")
// const tabBtn = document.getElementById("tab-btn")    
// let myLeads = []
// // const tabs1 = [
// //     { url: "www.linkdin.com" }
// // ]
// tabBtn.addEventListener('click', function () {  
//     // console.log(tabs[0].url)

//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)
//     });


// });

// // localStorage.clear()
// const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))
// // console.log(leadsFromLocal)
// if (leadsFromLocal) {
//     myLeads = leadsFromLocal;

//     render(myLeads)
// }

// delBtn.addEventListener('dblclick', function () {
//     // console.log("db clicked")
//     localStorage.clear();
//     myLeads = []
//     render(myLeads)

// })

// inputBtn.addEventListener('click', function () {
//     myLeads.push(inputEl.value)
//     // console.log(myLeads)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
//     // console.log(localStorage.getItem("myLeads"))
// })



// function render(leads) {
//     let listItem = ""

//     for (let i = 0; i < myLeads.length; i++) {
//         const formatted = formatUrl(leads[i])

//         console.log(formatted)
//         // listItem += "<li><a href='${formatted}'>" + myLeads[i] + "</a></li>"
//         listItem += `<li>
//                                 <a href='${formatted}' target='_blank'>${leads[i]}</a>
//                             </li>`;

//     }
//     ulEl.innerHTML = listItem

// }
   
// function formatUrl(url) {
//     if (!url.startsWith("http")) {
//         return "https://" + url
//     }
//     return url
// }

// --------------------------------------------------

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")
let myLeads = []

tabBtn.addEventListener('click',function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    });
});

delBtn.addEventListener('dblclick',function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

const leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocal){
    myLeads = leadsFromLocal
    render(myLeads)
}

inputBtn.addEventListener('click', function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

function render(leads) {
    let items = ""

    for (let i = 0; i < leads.length; i++) {
        let format = formatt(leads[i])
        items += `<li>
                <a href=${format}>
                ${leads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = items

}

function formatt(url){
    if(!url.startsWith('https')){
        return "http://"+url
    }
    return url
}






