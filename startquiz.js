var head = document.getElementById('head');
var options = document.getElementsByClassName('option');
var nextBtn = document.getElementById('next-btn');
var score = 0;
var liveScore = document.getElementById('score');
console.log(options);
var Quetions = localStorage.getItem('Quetions');
var Difficulty = localStorage.getItem('Difficulty');
var Catagory = localStorage.getItem('Catagory');
var xhr = new XMLHttpRequest();
xhr.open('GET','https://opentdb.com/api.php?amount='+Quetions+'&category='+Catagory+'&difficulty='+Difficulty+'&type=multiple',true);
xhr.onload = function(){
	if(this.status == 200){
		console.log((this.responseText));
		Response(JSON.parse(this.responseText));
		
	}
}
xhr.send();
function Response(result){
	var i = 0;
	setQuetion(result,i);
}
function setQuetion(result,i){
	if(i<Quetions){
		for(var opt of options){
			opt.style.backgroundColor = 'orange';
		}
		head.innerHTML = result.results[i].question;
		correct = Math.floor(Math.random()*4);
		var k = 0;
		for(var j=0;j<4;j++){
			if(j==correct){
					options[j].innerHTML = result.results[i].correct_answer;
			}
			else{
				options[j].innerHTML = result.results[i].incorrect_answers[k];
				k++;	
			}
		}
		var select = true;
		for(var opt of options){
			opt.addEventListener('click',function(e){
				if(e.currentTarget==options[correct] && select==true){
					e.currentTarget.style.backgroundColor = 'green';
					score += 5;
					liveScore.innerHTML = '<h1>Score:'+score+'</h2>';
					select = false;
				}
				else if(select==true){
					e.currentTarget.style.backgroundColor = 'red';
					select = false;
				}
				setTimeout(function(){ options[correct].style.backgroundColor = 'green';},1000);
			});
		}
		nextBtn.addEventListener('click',function(){
			i++;
			setQuetion(result,i);
		});

	}
}
