  window.onload = function() {
  var levelList = []; 
 var skillList = []; 
 
 document.getElementById('save').onclick = function() {
  var d1 = document.getElementById('level').value;
  var d2 = document.getElementById('skill').value;  
  var temp1 = {}; 
  var temp2 = {}; 
  temp1.level = d1; 
  temp2.skill = d2;
  var j = levelList.length;
  var i = skillList.length;
  levelList[j] = temp1;
  skillList[i] = temp2;
  console.log(skillList);
  out();
  localStorage.setItem('level', JSON.stringify(levelList));
  localStorage.setItem('skill', JSON.stringify(skillList));
 }
 
 function out() {
  var out1 = '';
  var out2 = ''; 
  for (var key in levelList) {   
   out1 += levelList[key].level;   
  } 

  for (var key in skillList) {   
   out2 += skillList[key].skill;   
  }
  var level = localStorage.setItem('level1', out1);
  var skill = localStorage.setItem('skill1', out2);
 } 
}
