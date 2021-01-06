document.getElementById('color').addEventListener('input', getColor);

function getColor(){
	var c1 = document.getElementById('color').value;

	document.getElementById('test').style.background=c1;
	document.getElementById('test').innerHTML=c1;
}