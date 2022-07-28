var head = document.getElementById('head');
var options = document.getElementsByClassName('option');
var nextBtn = document.getElementById('next-btn');
var liveScore = document.getElementById('score');
var option1 = document.getElementById('A');
var option2 = document.getElementById('B');
var option3 = document.getElementById('C');
var option4 = document.getElementById('D');
var i = 0;
var counter = 0;

var Quetions = localStorage.getItem('Quetions');
var Difficulty = localStorage.getItem('Difficulty');
var Catagory = localStorage.getItem('Catagory');

var score = 0;
var xhr = new XMLHttpRequest();
xhr.open('GET','https://opentdb.com/api.php?amount='+Quetions+'&category='+Catagory+'&difficulty='+Difficulty+'&type=multiple',true);
xhr.onload = function(){
	if(this.status == 200){
		Response(JSON.parse(this.responseText));
	}
}
xhr.send();
function Response(result){
	setQuetion(result,i);
}
function setQuetion(result,i){
	if(i<Quetions){
		head.innerHTML = result.results[i].question;
		correct = Math.floor(Math.random()*4);
		var k = 0;
		for(var j=0;j<4;j++){
			if(j == correct){
				options[j].innerHTML = result.results[i].correct_answer;
			}
			else{
				options[j].innerHTML = result.results[i].incorrect_answers[k];
				k++;	
			}
		}
		nextBtn.addEventListener('click',function(){
			i++;
			counter = 0;
			check_opt();
			setQuetion(result,i);
		});
	}
}
function opt1(){
	if(options[correct] == 0 && counter == 0){
		option1.style.backgroundColor = 'green';
		score = score + 5;
		console.log(score);
		liveScore.innerHTML = '<h1>Score: '+score+'</h1>';
	}
	else if(counter == 0){
		option1.style.backgroundColor = 'red';
		console.log(score);
	}
	setTimeout(function(){ options[correct].style.backgroundColor = 'green';},50);
	counter++;
}
function opt2(){
	if(options[correct] == 1 && counter == 0){
		option2.style.backgroundColor = 'green';
		score = score + 5;
		liveScore.innerHTML = '<h1>Score: '+score+'</h1>';
	}
	else if(counter == 0){
		option2.style.backgroundColor = 'red';
	}
	setTimeout(function(){ options[correct].style.backgroundColor = 'green';},50);
	counter++;
}
function opt3(){
	if(options[correct] == 2 && counter == 0){
		option3.style.backgroundColor = 'green';
		score = score + 5;
		liveScore.innerHTML = '<h1>Score: '+score+'</h1>';
	}
	else if(counter == 0){
		option3.style.backgroundColor = 'red';
	}
	setTimeout(function(){ options[correct].style.backgroundColor = 'green';},50);
	counter++;
}
function opt4(){
	if(options[correct] == 3 && counter == 0){
		option4.style.backgroundColor = 'green';
		score = score + 5;
		liveScore.innerHTML = '<h1>Score: '+score+'</h1>';
	}
	else if(counter == 0){
		option4.style.backgroundColor = 'red';
	}
	setTimeout(function(){ options[correct].style.backgroundColor = 'green';},50);
	counter++;
}
function check_opt(){
	option1.style.backgroundColor = 'orangered';
	option2.style.backgroundColor = 'orangered';
	option3.style.backgroundColor = 'orangered';
	option4.style.backgroundColor = 'orangered';
}