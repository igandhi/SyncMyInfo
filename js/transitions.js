var section = 1;
var buttonOpacity = 0.6

function forward(){
	var headerDiv = document.getElementById('headerWrapper');
	var descDiv = document.getElementById('descWrapper');
	var schedDiv = document.getElementById('schedWrapper');
	var prevBtn = document.getElementById('reverseButton');
	var nextBtn = document.getElementById('forwardButton');
	prevBtn.style.visibility='visible';


	if (section == 1){
		headerDiv.style.display = 'none';
		descDiv.style.display = 'block';
		section++;
	}
	else if(section == 2){
		descDiv.style.display = 'none';
		schedDiv.style.display = 'block';
		$(document).ready(function() {
			$("#forwardButton").html("Download PDF");

		});
		section++;
	}
	else if(section == 3){
		$().ready(function(){
			$("#forwardButton").click(downPDF());
		});
	}
}

function reverse(){
	var headerDiv = document.getElementById('headerWrapper');
	var descDiv = document.getElementById('descWrapper');
	var schedDiv = document.getElementById('schedWrapper');
	var prevBtn = document.getElementById('reverseButton');

	if (section == 3){
		schedDiv.style.display = 'none';
		descDiv.style.display = 'block';
		$().ready(function() {
			$('#forwardButton').html("Next");
		});
		section--;
	}
	else if (section == 2){
		descDiv.style.display = 'none';
		headerDiv.style.display = 'block';
		prevBtn.style.visibility='hidden';
		section--;
	}
	else{

	}
}

function wordUpdate() {
	var helper = document.getElementById('helper');
	if(section == 1) {
		helper.innerHTML = "Let's get started by filling out some basic information";
	} else if(section == 2){
		helper.innerHTML = "Course description and other information";
	}
	else if(section == 3){
		helper.innerHTML = "Click the \"Download PDF\" button to download your PDF!";
	}

}