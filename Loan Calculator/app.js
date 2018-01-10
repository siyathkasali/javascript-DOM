document.getElementById('loan-form').addEventListener('submit', calculateLoan);

function calculateLoan(e){
  e.preventDefault();
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest')
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalIntrest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedIntrest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value)  * 12;

  // Compute monthly payment
  const x = Math.pow(1+calculatedIntrest, calculatedPayments);
  const monthly = (principal*x*calculatedIntrest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalIntrest.value = ((monthly* calculatedPayments) - principal).toFixed(2);
  }else{
   showError('Please enter a valid numbers');
  }

}

function showError(error){
  const errorDiv = document.createElement('div');
  // Get elements
  const card = document.createElement
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

}