F.attach(QUnit);

const num1 = 200;
const num2 = 100;
const ZERO = "0";
const WAIT_TIME = 500;

/* DOM Elements */
const num1ID = "#firstNumber";
const num2ID = "#secondNumber";
const calculateBtnId = "#calculate";
const resultDivId ="#result";
const errorMessageId = "#errorMessage";
const addOperationCSS = 'select#operation option:eq(0)';
const subtractOperationCSS = 'select#operation option:eq(1)';
const multiplyOperationCSS = 'select#operation option:eq(2)';
const divideOperationCSS = 'select#operation option:eq(3)';

/* Assertion Messages */
const NUM1_FIELD_DISPLAYS = "Num1 field displays";
const NUM2_FIELD_DISPLAYS = "Num2 field displays";
const CALCULATE_BTN_DISPLAYS = "Calculate button displays";
const RESULT_DISPLAYS = "Results display";
const ERROR_MESSAGE_DISPLAYS = "Error display";

/* Error messages*/
const NUM1_IS_BLANK = "Num1 is empty";
const NUM2_IS_BLANK = "Num2 is empty";

QUnit.module("Calculator",{
	setup: function(){
		F.open("calculator.html");
		F.wait(F.win.focus());
	}
});

QUnit.moduleDone(function() {
	F.win.close();
});

QUnit
.cases([
		{title: "Addition",operation: addOperationCSS, expectedResult: "300"},
		{title: "Subtraction",operation: subtractOperationCSS, expectedResult: "100"},
		{title: "Multiplication",operation: multiplyOperationCSS, expectedResult: "20000"},
		{title: "Division",operation: divideOperationCSS, expectedResult: "2"}
])
.test("Operations", function(params){
	F(num1ID).exists(NUM1_FIELD_DISPLAYS).type(num1);
	F(num2ID).exists(NUM2_FIELD_DISPLAYS).type(num2);
	F.wait(WAIT_TIME);
	F.win.$(params.operation).prop('selected', true).trigger('change');
	F(calculateBtnId).exists(CALCULATE_BTN_DISPLAYS).click();	
	F(resultDivId).exists(RESULT_DISPLAYS).text(params.expectedResult);
	F.wait(WAIT_TIME);
});

QUnit
.cases([
		{title: "Num1 is empty", firstNum: "", secondNum: num2, expectedResult: NUM1_IS_BLANK},
		{title: "Num2 is empty", firstNum: num1, secondNum: "", expectedResult: NUM2_IS_BLANK}
])
.test("Validations", function(params){
	F(num1ID).exists(NUM1_FIELD_DISPLAYS).type(params.firstNum);
	F(num2ID).exists(NUM2_FIELD_DISPLAYS).type(params.secondNum);
	F.wait(WAIT_TIME);
	F.win.$(addOperationCSS).prop('selected', true).trigger('change');
	F(calculateBtnId).exists(CALCULATE_BTN_DISPLAYS).click();	
	F(errorMessageId).exists(ERROR_MESSAGE_DISPLAYS).text(params.expectedResult);
	F.wait(WAIT_TIME);
});


