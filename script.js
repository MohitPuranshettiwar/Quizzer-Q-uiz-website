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
	console.log("i = " + i);
}

//set difficulty
var difficulty = 'easy';
function setDifficulty(DifficultyValue){
	difficulty = DifficultyValue;
	console.log(difficulty);
}

//set catagory
var Catagory = '18';
function setCatagory(CatagoryValue){
	Catagory = CatagoryValue;
	check_catagory();
}
const all_catagory = document.getElementsByClassName("catagory"); 
function check_catagory(){
	all_catagory.style.color = "pink";
}

