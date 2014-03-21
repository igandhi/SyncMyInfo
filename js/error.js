function headerError(){
	var table = document.getElementById('headerTable');
	var headerElements = document.getElementsByClassName('headerInput');
	var empty = true;


	for(var i = 0; i < 9; i++){       
        if(headerElements[i].value.length == 0 ){
           	empty = false;
        }  
    }

    return empty;
}