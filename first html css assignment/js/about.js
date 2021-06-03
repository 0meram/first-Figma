
console.log("hellow")
const body = document.getElementsByTagName("body")[0];
console.log(body)

const pageWrapper = document.getElementById("pageWrapper")



const nav = document.createElement("div");
nav.classList.add("nav")
console.log(nav)


const link = document.createElement("a");
link.classList.add("link")
link.textContent = "my link"
link.href = "https://il.shein.com/checkout"
console.log(link)


const main = document.createElement("div");
main.classList.add("main")
console.log(main)

const sideBar = document.createElement("div");
sideBar.classList.add("sideBar")
sideBar.textContent = "my side bar"
console.log(sideBar)

const section = document.createElement("div");
section.classList.add("section")
section.textContent = "my section"
console.log(section)



main.append(sideBar, section)
nav.append(link)
pageWrapper.append(nav, main)


let axi = 554
console.log("🚀 ~ file: about.js ~ line 43 ~ axi", axi)
