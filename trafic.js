function fun() {
	setTimeout(function (){
	document.getElementById("red").style.backgroundColor ="red";
	document.getElementById("yellow").style.backgroundColor ="black";
	document.getElementById("green").style.backgroundColor ="black";
},3000);

		setTimeout(function (){
	document.getElementById("red").style.backgroundColor="black";
	document.getElementById("yellow").style.backgroundColor="#FF9900";
	document.getElementById("green").style.backgroundColor="black";
},6000);
		setTimeout(function (){
	document.getElementById("red").style.backgroundColor="black";
	document.getElementById("yellow").style.backgroundColor="black";
	document.getElementById("green").style.backgroundColor="green";
},9000);

}
setInterval(fun,12000);
