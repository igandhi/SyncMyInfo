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

	if (section == 1){
		helper.innerHTML = "You can't go back anymore. Press the right arrow the go to the next step.";
	}
	else if(section == 2){
		helper.innerHTML = "Here's where you can add in the all the descriptions for your syllabus";
	}
	else{
		helper.innerHTML = "Once you've completed this form, click the Create PDF button to download your PDF!";
	}

}

function styleBlue(){
	document.getElementById('stylesheet').href = 'css/blue.css';
}

function styleRed(){
	document.getElementById('stylesheet').href = 'css/red.css';
}

function styleGreen(){
	document.getElementById('stylesheet').href = 'css/green.css';
}