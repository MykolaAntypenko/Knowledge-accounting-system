
 
 var levelList = []; 
 var skillList = []; 
 
 if(localStorage.getItem('level') !=undefined) {
  levelList = JSON.parse(localStorage.getItem('level'));
  out();
 }

  if(localStorage.getItem('skill') !=undefined) {
 skillList = JSON.parse(localStorage.getItem('skill'));
  out();
 }
 
 document.getElementById('save').onclick = function() {
  var level = document.getElementById('level').value; 
  var skill = document.getElementById('skill').value;
  var temp1 = {};
  var temp2 = {};
  temp1.level = level;   
  temp1.check = false;
  var i = levelList.length;
  temp2.skill = skill;   
  temp2.check = false;
  var j = skillList.length;
  levelList[i] = temp1;
  skillList[j] = temp2;
  out();
  localStorage.setItem('level', JSON.stringify(levelList)); 
  localStorage.setItem('skill', JSON.stringify(skillList)); 
  
 }

 function out() {
  var out1 = '';  
  var out2 = '';
  for (var key in levelList) {   
   out1 += levelList[key].level + '<br>';   
  }
  for (var key in skillList) {   
   out2 += skillList[key].skill + '<br>';   
  }
  window.localStorage.targetlevel = out1;
  window.localStorage.targetskill = out2;
 } 
function save() {
            var div = document.getElementById('savemessage');

                div.innerHTML = "The entered data has been successfully saved";
        }
        document.getElementById("save").addEventListener("click", save);


