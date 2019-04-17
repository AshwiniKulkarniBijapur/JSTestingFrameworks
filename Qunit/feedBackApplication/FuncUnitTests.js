F.attach(QUnit);

QUnit.module("Calculator",{
	setup: function(){
		F.open("signInPage.html");
	}
});

QUnit.moduleDone(function() {
	F.win.close();
});

QUnit.test("Valid Login", function(){
	enterLoginDetails("guest", "guest");
	F.wait(500);
	enterFeedBackDetails("Rahul Sharma", 25);
	F.wait(1000);
	F("#submit").exists("feedbeck submit").click();
	F.wait(500);
	F("#ThankYouMsg").exists("Thank you message displays").text("Thank You for your valuable Feedback!!!")
});


/* Parameterized Test cases */
QUnit
.cases([
	{title: "Wrong Login", uname: "blahblah", pwd: "blah", expected: "Invalid login"},
	{title: "Empty Login", uname: "", pwd: "", expected: "Input Fields are blank"}
])
.test("Validation", function(params){
	enterLoginDetails(params.uname, params.pwd);
	F.wait(500);
	F("#errorMsg").text(params.expected);
});

/* Helper methods*/

function enterLoginDetails(uname, password)
{
	F("#username").exists("uname display").type(uname);
	F("#password").exists("password display").type(password);
	F("#submit").exists("submit btn").click();
}
function enterFeedBackDetails(name, age)
{
	F("#fullName").exists("fullName display").type(name);
	F("#age").exists("age display").type(age);
	F("#email").exists("email display").type("guestUser@gmail.com");
	F("#comments").exists("comments display").type("The service was very nice. We enjoyed our dinner!");
}

