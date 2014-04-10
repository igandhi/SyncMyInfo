var section = 1;
var buttonOpacity = 0.6

function forward(){
	var headerDiv = document.getElementById('headerWrapper');
	var descDiv = document.getElementById('descWrapper');
	var schedDiv = document.getElementById('schedWrapper');


	if (section == 1){
		headerDiv.style.display = 'none';
		descDiv.style.display = 'block';
		section++;
	}
	else if(section == 2){
		descDiv.style.display = 'none';
		schedDiv.style.display = 'block';
		section++;
	}
	else{

	}
}

function reverse(){
	var headerDiv = document.getElementById('headerWrapper');
	var descDiv = document.getElementById('descWrapper');
	var schedDiv = document.getElementById('schedWrapper');

	if (section == 3){
		schedDiv.style.display = 'none';
		descDiv.style.display = 'block';
		section--;
	}
	else if (section == 2){
		descDiv.style.display = 'none';
		headerDiv.style.display = 'block';
		section--;
	}
	else{

	}
}

function wordUpdate() {
	var helper = document.getElementById('helper');

	if(section == 2){
		helper.innerHTML = "Course description and other information";
	}
	else{
		helper.innerHTML = "Click the \"Create PDF\" button to download your PDF!";
	}

}