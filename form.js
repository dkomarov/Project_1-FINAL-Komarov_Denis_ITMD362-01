function confirmation() {

	if ((document.getElementById('dob_field').value == "") && (document.getElementById('email_field').value == ""))
	{
		alert("The 'date of birth' and 'email address' fields are mandatory. Please make sure you have filled 
		out the 'date of birth' and 'email address' fields.");
		return false;
	}
	else 
	{
		alert("Form submitted successfully! The fields will now reset.");
		document.write("Form submitted successfully! Fields not completed were optional. Submission confirmed.");
			
	}

	if ((document.getElementById('fName_field').value == "") && (document.getElementById('lName_field').value == "") 
	&& (document.getElementById('phoneNum_field').value == ""))
  {
  	alert("There were empty fields! However, some fields are optional (both first & last name and 
  	'phone number'). If you do not wish to provide optional information, click 'Submit' once more.");
		return false;
	}
	else 
	{
  	alert("Form submitted successfully! The fields will now reset.");
		document.write("Form submitted successfully! Fields not completed were optional. Submission confirmed.");
	}

}



