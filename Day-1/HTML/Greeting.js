function greet(){
	var name = document.getElementById("txtName").value;
	var divMessage = document.getElementById("divMessage");
	var greetMsg = 'Hi ' + name;
	var color = "";
	if (new Date().getHours() < 12){
		greetMsg = greetMsg + "Good Morning";
		color = "green";
	} else {
		greetMsg = greetMsg + "Good Evening";
		color = "red";
	}
		divMessage.innerHTML = greetMsg;
		divMessage.style.color = color;

}
function initialize(){
	document.getElementById("btnGreet").onclick = greet;
}
window.onload = initialize;