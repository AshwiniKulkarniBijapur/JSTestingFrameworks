QUnit.module("Calculator" ,{
	setup: function(assert){
		this.num1 = 200;
		this.num2 = 100;
	}
});

QUnit
.cases([
	{title: "Addition",operation: '+', expectedResult: 300},
	{title: "Subtraction",operation: '-', expectedResult: 100},
	{title: "Multiplication",operation: '*', expectedResult: 20000},
	{title: "Division",operation: '/', expectedResult: 2}
])
.test("Operation", function(params, assert){
	assert.equal(calculate(this.num1,this.num2,params.operation), params.expectedResult);
});

QUnit.module("Calculator");

QUnit
.cases([
	{title: "Num1 is empty", firstNum: "", secondNum: 200, expectedResult: "Num1 is empty"},
	{title: "Num2 is empty", firstNum: 200, secondNum: "", expectedResult: "Num2 is empty"}
])
.test("Validation", function(params, assert){
	assert.equal(validateNumbers(params.firstNum, params.secondNum), params.expectedResult);
});



