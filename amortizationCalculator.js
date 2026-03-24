function amortization() {
    try{
        const loanAmt = Number(prompt("Please enter your intial loan amount(NO commas)"));
        let downpayment = parseFloat(prompt("Please enter the down payment() "));
         downpayment = downpayment/100;
         console.log(downpayment)
        const term = Number(prompt("Please enter the number of years: "));
        if (term != 15 || 30) {
            alert("You can only enter 15 or 30 for downpayment!")
        }
        const months = term * 12

        dornmPayment = loanAmt
        if(isNaN(loanAmt) || isNaN(downpayment) || isNaN(term)){
            alert("Please make sure you enetered all numerical digits for all the prompts!")
        }
        const principalLoan = loanAmt - downpayment;
        const annualInterestRate = 5.75;
        const monthlyInterestRate = 0.0575/12;
        let monthlyPayment = ((monthlyInterestRate * principalLoan) / (1 - Math.pow(1 + monthlyInterestRate, - months))).toFixed(2);
        console.log(monthlyPayment)
        const interestPaid = (monthlyPayment * term) - principalLoan;
        const loanCost = principalLoan + annualInterestRate

        const result = document.getElementById("Term").innerHTML=  "term length = " + term;
        const result1 = document.getElementById("Annual Interest Rate").innerHTML=  "Interest Rate = $" + annualInterestRate + "%";
         const result2 = document.getElementById("Monthly Interest Rate").innerHTML= "Montly interest rate = $" + monthlyInterestRate;
        const result3 = document.getElementById("Principal Loan Amount").innerHTML= "principal loan =   $" + principalLoan;
        const result4 = document.getElementById("Total Interest Paid").innerHTML= "Interest Paid =  $" + interestPaid;
        const result5 = document.getElementById("Total loan Cost").innerHTML= "Loan Amount =  $" + loanAmt;
        const result6 = document.getElementById("Monthly Payment").innerHTML= "Monthly Payment =  $" + monthlyPayment;

    }
    catch(error){
        alert("There is an error!" + error)
    };

}