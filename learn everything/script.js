let nam= document.querySelector("#name")
let form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();


    if(nam.value.length <=2){
        document.querySelector("#hide").style.display = "initial"
        console.log("done")
    }
})