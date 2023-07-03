/*POPUP BOX QUIZ 2 */
document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    document.getElementById("popupBox").style.display = "block";
    setTimeout(hidePopupBox, 8000);
});
function hidePopupBox(){
    document.getElementById("popupBox").style.display = "none";
}