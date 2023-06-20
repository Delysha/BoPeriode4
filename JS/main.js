const grey = document.getElementById("js--grey");
const Skateboard = document.getElementsByClassName("product");

grey.onclick = function(){
    console.log("gay");
    console.log(Skateboard);
    for(let i = 0; i < Skateboard.length; i++){
        Skateboard[i].style.display = "none";
    }
    document.getElementById("js--greyModal").style.display = "grid";
}


const closeGreyModal = document.getElementById("js--closeGrey");
closeGreyModal.onclick = function(){
    document.getElementById("js--greyModal").style.display = "none";
    for(let i = 0; i < Skateboard.length; i++){
        Skateboard[i].style.display = "block";
    }
}