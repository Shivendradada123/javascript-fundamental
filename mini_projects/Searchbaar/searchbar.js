const inputFeild = document.getElementById("Searchbar")
const listIteam = document.querySelectorAll("#list li")


inputFeild.addEventListener("input",  function(){
const searchValue = inputFeild.value.toLowerCase();


listIteam.forEach(function(item){

        const text = item.textContent.toLowerCase()

        if(text.includes(searchValue)){
    item.style.display = "block"
}else{
    item.style.display = "none"
}
})




})