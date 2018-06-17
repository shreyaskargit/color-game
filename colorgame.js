var nos = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebtn = document.querySelectorAll(".mode");

intit();

function intit(){
	for (var i = 0; i < modebtn.length; i++) {
		modebtn[i].addEventListener("click", function(){
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			nos = 3;
		}
		else{
			nos = 6;
		}
		reset();
		});
	}
	for(var i=0; i<squares.length; i++)
	{
		squares[i].addEventListener("click", function(){
			var clickedcolor = this.style.background;
			if(clickedcolor === pickedcolor){
				messagedisplay.textContent = "correct!";
				changeColors(clickedcolor);
				h1.style.background = clickedcolor;
				resetbutton.textContent = "Play Again?";
			}
			else{
				this.style.background = "#232323";
				messagedisplay.textContent = "Try again";
			}
		});
	}
	reset();
}
function reset(){
	colors = generateRandomColors(nos);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	resetbutton.textContent = "New Color";
	messagedisplay.textContent = "";
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i]){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
resetbutton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	for(var i=0; i<colors.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0 ;i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}