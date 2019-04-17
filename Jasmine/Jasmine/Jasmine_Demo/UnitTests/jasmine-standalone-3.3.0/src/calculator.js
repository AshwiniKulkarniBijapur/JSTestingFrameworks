function validateNumbers(num1, num2)
{
	var errorMsg = "";
	if(num1 == "")
		errorMsg = "Num1 is empty";
	else if(num2 == "")
		errorMsg = "Num2 is empty";
	if(errorMsg != "")
	{
		$("#resultSection").hide();
	}
	else 
		$("#resultSection").show();
	return errorMsg;
}

function calculate(firstNum, secondNum, operation)
{
	var result;
	var num1 = parseInt(firstNum);
	var num2 = parseInt(secondNum);
	var operations = {ADD: '+',	SUBTRACT: '-',	MULTIPLY: '*', DIVIDE: '/'}	
	switch (operation) 
    {
        case operations.ADD:
       			result = num1+num2;
    			break;
        case operations.SUBTRACT: 
                result = num1-num2;
    			break;
  		case operations.MULTIPLY: 
  				result = num1*num2;
    			break;
    	case operations.DIVIDE: 
    	        if(num2 == 0)
				{
					result = "Cannot Divide by Zero";
				}
				else {
					result = num1/num2;
				} 
				break;
 	}
 	return result;
}


  
