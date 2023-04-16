let bt1 = document.getElementById("bt1")
let bt2 = document.getElementById("bt2")
let bt3 = document.getElementById("bt3")

if(bt1.checked){
    bt1.style.borderBottom =" 2px solid #707FDA"
}

document.getElementById("bt1").onclick = () => {
    bt1.style.borderBottom =" 2px solid #707FDA"
    bt2.style.borderBottom = "none"
    bt3.style.borderBottom = "none"
}

document.getElementById("bt2").onclick = () => {
    bt2.style.borderBottom =" 2px solid #707FDA"
    bt1.style.borderBottom = "none"
    bt3.style.borderBottom = "none"
}

document.getElementById("bt3").onclick = () => {
    bt3.style.borderBottom =" 2px solid #707FDA"
    bt2.style.borderBottom = "none"
    bt1.style.borderBottom = "none"
}