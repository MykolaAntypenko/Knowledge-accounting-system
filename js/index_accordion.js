 window.onload = function() {
var acc_profile = document.getElementsByClassName("accordion_menu");
var i;

for (i = 0; i < acc_profile.length; i++) {
  acc_profile[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel_profile = this.nextElementSibling;
    panel_profile.style.position = "fixed";
    panel_profile.style.top = 80 + 'px';
    panel_profile.style.width = "185px";
    if (panel_profile.style.maxHeight){
      panel_profile.style.maxHeight = null;
    } else {
      panel_profile.style.maxHeight = 200 + "px";
    } 
   
  });
}
}