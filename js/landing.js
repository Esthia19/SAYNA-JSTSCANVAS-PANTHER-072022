var element = document.querySelectorAll('.milieu1');
element.forEach(function(element){
    element.classList.add('slide-in-left'); 
    element.style.visibility='visible'
});

var element = document.querySelectorAll('.milieu2');
element.forEach(function(element){
    element.classList.add('slide-in-left'); 
    element.style.visibility='visible'
});

var element = document.querySelectorAll('.milieu3');
element.forEach(function(element){
    element.classList.add('slide-in-left'); 
    element.style.visibility='visible'
});


var element = document.querySelectorAll('.formulaire');
element.forEach(function(element){
    element.classList.add('slide-in-left'); 
    element.style.visibility='visible'
});


/*CHANGEMENT DE DIV MYDIV*/

var currentIndex = 0;
var divs = document.getElementsByClassName('myDiv');

function showDiv (index){
    for (var i = 0;i<divs.length;i++){
    divs[i].classList.remove("visible");
    }
    if (index<0){
        currentIndex=divs.length-1;
    }else if
        (index>=divs.length){
            currentIndex=0;
        }else{
            currentIndex=index;
        }

        divs[currentIndex].classList.add("visible");
    }
    function nextDiv () {
        showDiv(currentIndex+1);
    }
showDiv(0);


/*POPUP BOX */
document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    document.getElementById("popupBox").style.display = "block";
    setTimeout(hidePopupBox, 5000);
});
function hidePopupBox(){
    document.getElementById("popupBox").style.display = "none";
}



/* REDIGER VERS  UN DIV */
function redirigeVersDiv(event,maDiv){
    event.preventDefault();

    var div = document.getElementById(maDiv);

div.scrollIntoView({
    behavior: 'smooth'
});
}


