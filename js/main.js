var counter = 1;
//var ourlist = document.getElementById("our-list");
var ourlist = document.querySelector("#our-list");

//var ourButton = document.getElementById("our-button");
var ourButton = document.querySelector("#our-button");


var ourHeadline = document.getElementById("headline");


//var listItems = document.getElementById("our-list").getElementsByTagName("li");
var listItems = document.querySelectorAll("#our-list li");

ourlist.addEventListener("click", activateItem);

function activateItem(e)
{
    if(e.target.nodeName== "LI"){
        ourHeadline.innerHTML = e.target.innerHTML;
    for(i=0; i<e.target.parentNode.children.length; i++) {
        e.target.parentNode.children[i].classList.remove("active")
        }

    e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){
    ourlist.innerHTML += "<li>Something new " + counter + "</li>" 
    counter++;
}
