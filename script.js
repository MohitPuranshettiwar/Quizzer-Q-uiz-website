//No Of Quetions
var i = 5;
const incBtn = document.getElementById('inc');
const decBtn = document.getElementById('dec');
incBtn.addEventListener("click",function(){
	if(i<10){
		enablebtn(decBtn);
		i++;
		document.getElementById('counter').innerText = "Number Of Quetions : " + i;
	}
	else{
		disablebtn(incBtn);
	}
});
decBtn.addEventListener("click",function(){
	if(i>1){
		enablebtn(incBtn);
		i--;
		document.getElementById('counter').innerText = "Number Of Quetions : " + i;
	}
	else{
		disablebtn(decBtn);
	}
});

function disablebtn(Btn){
	Btn.style.backgroundColor = 'red';
	Btn.style.cursor = 'arrow';
}
function enablebtn(Btn){
	Btn.style.backgroundColor = 'skyblue';
	Btn.style.cursor = 'pointer';	
}
//Difficulty
var difficulty = 'easy';
function setDifficulty(difficultyValue){
	difficulty = difficultyValue;
}
//Catagory
var cataSelected;
var Catagory = document.querySelectorAll('.catagory');
console.log(Catagory);
Catagory.forEach(function(cata){
	cata.addEventListener('click',function(e){
		cataSelected = e.currentTarget.classList[1];
		var val = [i,difficulty,cataSelected];
		localStorage.setItem('Quetions',i);
		localStorage.setItem('Difficulty',difficulty);
		localStorage.setItem('Catagory',cataSelected);
		location.href = "./startquiz.html";
		
	});
});
