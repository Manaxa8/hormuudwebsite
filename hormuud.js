document.addEventListener("DOMContentLoaded",() =>{
const PersonalToggle= document.getElementById("PersonalToggle")
const Personalmenu= document.getElementById("Personalmenu")

PersonalToggle.addEventListener("click",(e)=>{
    e.preventDefault();
    Personalmenu.classList.toggle("show");
});

document.addEventListener("click",(e) =>{
if(!PersonalToggle.contains(e.target) && !
Personalmenu.contains(e.target)){
    Personalmenu.classList.remove("show");
}

});
});


