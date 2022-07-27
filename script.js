//No Of Quetions
var i = 5;
const increment = document.getElementById('inc');
const decrement = document.getElementById('dec');
const counter = document.getElementById('counter');

function dec(){
	if(i>1){
		i--;
		counter.innerHTML = "Number Of Quetions : " + i ;
	}
	check_btn(); 
}
function inc(){
	if(i<10){
		i++;
		counter.innerHTML = "Number Of Quetions : " + i ;
	}
	check_btn();
}
function check_btn(){
	if(i == 1){
		increment.style.background = "skyblue";
		decrement.style.background = "red";
	}
	else if(i == 10){
		increment.style.background = "red";
		decrement.style.background = "skyblue";
	}
	else{
		increment.style.background = "skyblue";
		decrement.style.background = "skyblue";
	}
}

var difficulty = 'easy';
function set_diffi(DifficultyValue){
	difficulty = DifficultyValue;
}

var Catagory = '18';
function setCatagory(CatagoryValue){
	Catagory = CatagoryValue;
	check_catagory();
}

