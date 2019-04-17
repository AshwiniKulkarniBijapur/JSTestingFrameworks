function validateUser(){
	var username = $("#username").val();
	var password = $("#password").val();
	var errorMsg;

	if(username == "" || password == "")
	{
		errorMsg = "Input Fields are blank";
		$("#errorMsg").html(errorMsg);
		return false;
	}
	if(username == "guest" && password == "guest")
	{
		return true;
	}
	else 
	{
		errorMsg = "Invalid login";
		$("#errorMsg").html(errorMsg);
		return false;
	}
}

function resetForm() 
{
  $("#feedBackForm").reset();
}