var levelList = [];  
 
 if(localStorage.getItem('level') !=undefined) {
  levelList = JSON.parse(localStorage.getItem('level'));
  out();
 }

 document.getElementById('save_input').onclick = function() {
  var level = document.getElementsByTagName('input').value; 
  var temp1 = {};
  temp1.level = level;   
  temp1.check = false;
  var i = levelList.length;
  levelList[i] = temp1;
  out();
  localStorage.setItem('level', JSON.stringify(levelList)); 
  
 }

 function out() {
  var out1 = '';  
  for (var key in levelList) {   
   out1 += levelList[key].level + '<br>';   
  }
  window.localStorage.range = out1;
  //window.localStorage.targetskill = out2;
 } 

























 /* $(function(){
    $('input[type=radio]').each(function(){
        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
        
        if (state) this.checked = state.checked;
    });
});

$(window).bind('unload', function(){
    $('input[type=radio]').each(function(){
        localStorage.setItem('radio_' + $(this).val(), JSON.stringify({checked: this.checked})
        );
    });
});*/


 
 //if(localStorage.getItem('range') !=undefined) {
 // rangeList = JSON.parse(localStorage.getItem('range'));
 // out();
 //}

 
 
 /*
 window.onload = function() {
  document.getElementById("save_input").onclick = function() {
var mess = document.getElementsByTagName('input');
  for (var i = 0; i < mess.length; i++) {
    if (mess[i].type === 'radio' && mess[i].checked) {
        result = mess[i].value;

window.localStorage.result += result;
if (window.localStorage.result == "undefined") {
  result = removeItem(result);
} 

    }
  }
 // document.getElementById('result').textContent = result;
}
}*/
/*$(document).ready(function(){

  var radios = $('input[type="radio"]');
  var val = localStorage.getItem('range');
  for(var i=0;i<radios.length;i++){
    if(radios[i].value == val){
      radios[i].checked = true;
    }
  }
  $('input[type="radio"]').on('change', function(){
    window.localStorage.range =  $(this).val();
    //localStorage.setItem('range', $(this).val()); 
  });
});*/

//window.onload = function() {
 // var radios = document.getElementsByType("radio");
/*
 var rangeList = []; 
 if(localStorage.getItem('range') !=undefined) {
  rangeList = JSON.parse(localStorage.getItem('range'));
  out();
 }
 
 document.getElementById("save_input").onclick = function() {
  var range = document.querySelector('.container input').value; 
  var temp1 = {};
  temp1.range = range;   
  temp1.check = false;
  var i = rangeList.length;
  rangeList[i] = temp1;
  out();
  localStorage.setItem('range', JSON.stringify(rangeList));  
  
 }

 function out() {
  var out1 = '';  
  for (var key in rangeList) {   
   out1 += rangeList[key].range + '<br>';   
  }
  window.localStorage.ranges = out1;
} */

//}
