describe("Calculator", function() { 
	beforeEach(function(){
		num1 = 10;
		num2 = 5;
	});
   
   it("should Add two numbers correctly",function() { 
      expect(calculate(num1,num2,"+")).toEqual(15); 
   }); 

   it("should Subtract two numbers correctly",function() { 
      expect(calculate(num1,num2,"-")).toEqual(5); 
   });

   it("should Multiply two numbers correctly",function() { 
      expect(calculate(num1,num2,"*")).toEqual(50); 
   });

   it("should Divide two numbers correctly",function() { 
      expect(calculate(num1,num2,"/")).toEqual(2); 
   });

   it("should not divide by zero",function() { 
      expect(calculate(num1,0,"/")).toEqual("Cannot Divide by Zero"); 
   });

 });

describe("Calculator", function(){
	beforeEach(function(){
		num = 10;
	});
   
   it("should return error message if num1 is empty",function() { 
      expect(validateNumbers("", num)).toEqual("Num1 is empty"); 
   });

   it("should return error message if num1 is empty",function() { 
      expect(validateNumbers(num, "")).toEqual("Num2 is empty"); 
   });
});