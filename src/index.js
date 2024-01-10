import { setArr, getArr, burbuja } from "./burbuja.js"

const gen = document.getElementById("gen")
gen.addEventListener("click", function(){
    setArr()
    const p = document.getElementById("out")
    p.innerText = getArr()
})


const b = document.getElementById("btn")
b.addEventListener("click",function(){
    const pOut = document.getElementById("outO")
    pOut.innerText = burbuja()
})

