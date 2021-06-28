// Compute function is responsible for calculating interest
function compute()
{
	// Retrieving the amount value and assign it to "principal"
    var principal = document.getElementById("principal").value;
    // Validating the amount value
    // If the amout value is greater than 0 then execute this block of code
    if(principal > 0){
    	// Retrieving the other needed values 
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        // Calculating the interest
        var interest = principal * years * rate / 100;
        // Calculating the year receiving the amount
        var year = new Date().getFullYear() + parseInt(years);
        // Generating the result message
        var result = "If you deposit \<mark\>" + principal + "\</mark\>,\<br\>" +
                    "at an interest rate of \<mark\>" + rate + "%\</mark\>.\<br\>" +
                    "You will receive an amount of \<mark\>" + interest + "\</mark\>,\<br\>" +
                    "in the year \<mark\>" + year + "\</mark\>\<br\>";
        // Assigning the result message to the span that will show the message to the user
        document.getElementById("result").innerHTML = result;
        return true;
    } else {
    	// If the amount value is equal or less than 0 then this block will be executed
    	// Showing a popup message to user informing him to enter a positive value
        alert("Enter a positive number");
        // After closing the popup message we set the focus on the principal text box
        document.getElementById("principal").focus();
        return false;
    }
    
}

// updateRate function updates the rate text when the range slider changes
function updateRate(){
	// retrieving the value of range slider
    var rateval = document.getElementById("rate").value;
    // Updating the value of rate
    document.getElementById("rate_val").innerText = rateval + "%";
}
        