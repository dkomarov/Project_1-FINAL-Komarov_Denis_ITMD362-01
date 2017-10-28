function formValidator() {

	var x = document.forms["my.Form"]["fName_field"].value;
	var y = document.forms["my.Form"]["email_field"].value;
	
	if ((x == "") || (y == "")) {
		alert("Incomplete field(s). Optional fields are: last name, phone number. You must provide all other information to continue.");
	}
	else {
  	alert("Thank you! Have a nice day!");
		var response = "Thank you!";
		document.getElementById("results").innerHTML = response;
}

}

function mouseOver() {
	document.getElementById("subButton").style.color = "yellow";
}

function mouseOut() {
	document.getElementById("subButton").style.color = "navy";
}

function mouseOverInput(id) {
	document.getElementById(id).style.border = "solid lime 4px";
}

function mouseOutInput(id) {
	document.getElementById(id).style.border = "silver";
}