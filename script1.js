var color1=document.getElementById("c1");
var color2=document.getElementById("c2");
var body=document.getElementById("b1");
function gradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}
color1.addEventListener("input",gradient);


color2.addEventListener("input",gradient);
