document.getElementById('loan-form').addEventListener('submit', function(e){
  e.preventDefault();
  // Hide results 
  document.getElementById('results').style.display='none';
  // Show loader
  document.getElementById('loader').style.display='block';
  setTimeout(calculateLoan,1000);

  
});

function calculateLoan(e){
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
    document.getElementById('results').style.display='block';
    document.getElementById('loader').style.display='none';
  }else{
   showError('Please enter a valid numbers');
   document.getElementById('results').style.display='none';
    document.getElementById('loader').style.display='none';
  }

}

function showError(error){
  const errorDiv = document.createElement('div');
  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  // insert 

  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}