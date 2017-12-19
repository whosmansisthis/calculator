// JavaScript Document
function d (val){
	document.getElementById("d").value = val;
}
function v(val){
	document.getElementById("d").value +=val;
}
function e() {
try{
	d(eval(document.getElementById("d").value))
}
catch(err) {
	d("Error");
}
}
function hi(){
	 var x=document.getElementById("d").value;
	 x=x*x;
	 d(x)
}
	 

	