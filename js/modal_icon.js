
		function showModalWin() {
                var darkLayer = document.createElement('div'); 
                darkLayer.id = 'shadow'; 
                document.body.appendChild(darkLayer); 
 
                var modalWin = document.getElementById('popupWin'); 
                modalWin.style.display = 'block'; 
 
                darkLayer.onclick = function () {  
                    darkLayer.parentNode.removeChild(darkLayer); 
                    modalWin.style.display = 'none'; 
                    return false;
                };
	var cancel = document.querySelector('.cancel');
	cancel.addEventListener("click", function () {  
                    darkLayer.parentNode.removeChild(darkLayer); 
                    modalWin.style.display = 'none'; 
                    return false;
                });
            }
    
    