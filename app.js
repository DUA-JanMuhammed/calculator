var a = document.getElementById("displayScreen")

function sum(num) {
    
    a.value += num;
    console.log(a.value)
}

function calculating() {
    a.value = eval(a.value)
}

function toReset() {
    a.value = ""
}