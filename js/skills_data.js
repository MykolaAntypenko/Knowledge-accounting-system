//window.onload = function() {
/*  document.getElementById("save_input").onclick = function() {
var mess = document.getElementsByTagName('input');
  for (var i = 0; i < mess.length; i++) {
    if (mess[i].type === 'radio' && mess[i].checked) {
        result = mess[i].value;
         out();
        localStorage.setItem('range', JSON.stringify(result)); 

    }
  }
 // document.getElementById('result').textContent = result;
}
 if(localStorage.getItem('range') !=undefined) {
  levelList = JSON.parse(localStorage.getItem('range'));
 }
*/
/*var levelList = []; 
 
 if(localStorage.getItem('level') !=undefined) {
  levelList = JSON.parse(localStorage.getItem('level'));
  out();
 }

 
 
 document.getElementById("save_input").onclick = function() {
  var result = {};
  var level = document.getElementsByTagName('input');
  for (var i = 0; i < level.length; i++) {
    if (level[i].type === 'radio' && level[i].checked) {
        result = level[i].value;
        //localStorage.setItem('range', JSON.stringify(result)); 

    }
  }
 // document.getElementById('result').textContent = result;

 
  var i = levelList.length;

  levelList[i] = result;
  out();
  localStorage.range = JSON.stringify(levelList); 
  //localStorage.setItem('skill', JSON.stringify(skillList)); 
  
 }


 function out() {
  var out1 = '';  
  //var out2 = '';
  for (var i=0; i<levelList.length; i++) {   
   out1 += levelList[i] + '<br>';   
  }
  window.localStorage.knowledge = out1;

 } 
}*/

























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
  var result;
  $('input[type="radio"]').on('change', function(){
  

  window.localStorage.range =  $(this).val();
  result += localStorage.getItem('range');
  window.localStorage.rangees = result;
  
    //localStorage.setItem('range', $(this).val()); 
  });
});

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
