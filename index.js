function depositAmount(deposit, denomination, amount){
  if(amount === 0){return 0}
  else if (deposit.amount === 0) {return  0}
  else if (amount > 0){
    let maxAmount = Math.floor(deposit.amount/denomination);
    if(maxAmount > amount){
      deposit.amount = deposit.amount - (amount * denomination);
      return  amount;
    } else if (maxAmount <= amount){
      deposit.amount = deposit.amount - (maxAmount * denomination);
      return  maxAmount;
    }
  }

}



document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('billForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    getValues(event); // Call your function to handle form submission
  });
});



function getValues(event) {
  event.preventDefault();

  const hundreds = parseFloat(document.getElementById('hundreds').value);
  const fifties = parseFloat(document.getElementById('fifties').value);
  const twenties = parseFloat(document.getElementById('twenties').value);
  const tens = parseFloat(document.getElementById('tens').value);
  const fives = parseFloat(document.getElementById('fives').value);
  const ones = parseFloat(document.getElementById('ones').value);
  const quarters = parseFloat(document.getElementById('quarters').value);
  const dimes = parseFloat(document.getElementById('dimes').value);
  const nickels = parseFloat(document.getElementById('nickels').value);
  const pennies = parseFloat(document.getElementById('pennies').value);
  const setTill = parseFloat(document.getElementById('set-till').value);

  let isValid = true;

  const inputs = document.querySelectorAll('.bill-input');

  inputs.forEach(input => {
    const denomination = parseFloat(input.getAttribute('data-denomination'));
    const value = parseFloat(input.value);

    if (isNaN(value) || value % denomination !== 0) {
      input.classList.add('input-error');
      isValid = false;
    } else {
      input.classList.remove('input-error');
    }
  });

  const errorMessage = document.getElementById('error-message');

  if (!isValid) {
    errorMessage.style.display = 'block';
    return; // Exit the function if there are input errors
  } else {
    errorMessage.style.display = 'none';
  }  

  if (!isValid) {
    console.log("There are errors in the input. Please correct them.");
    return; // Exit the function if there are input errors
  }

  // Proceed with the rest of the function if inputs are valid

  let totalsum = hundreds + fifties + twenties + tens + fives + ones + quarters + dimes + nickels + pennies; 
  let deposit = {amount: totalsum - setTill};
  let amountFives = fives / 5
  let amountTens = tens / 10
  let amountTwenties = twenties / 20
  let amountFifties = fifties / 50
  let amountHundreds = hundreds / 100
  let amountOnes = ones / 1

  depositHundreds = depositAmount(deposit, 100, amountHundreds);
  depositFifties = depositAmount(deposit, 50, amountFifties);
  depositTwenties = depositAmount(deposit, 20, amountTwenties);
  depositTens = depositAmount(deposit, 10, amountTens);
  depositFives = depositAmount(deposit, 5, amountFives);
  depositOnes = depositAmount(deposit, 1, amountOnes);  

  const part1 = document.getElementById('deposit1');
  const part2 = document.getElementById('deposit2');
  const part3 = document.getElementById('deposit3');
  const part4 = document.getElementById('deposit4');
  const part5 = document.getElementById('deposit5');
  const part6 = document.getElementById('deposit6');
  const part7 = document.getElementById('deposit7');
  const part8 = document.getElementById('deposit8');
  const part9 = document.getElementById('deposit9');

  if(totalsum <= 300){
    part1.innerHTML = `There is not enough for Deposit`;
    const depositList = document.getElementById('depositList');
    depositList.style.display = 'block'; 
    return 0;
  }
  let endingTill = totalsum - Math.trunc(totalsum-300);
  endingTill = endingTill.toFixed(2);

  part1.innerHTML = `TOTAL = $${totalsum.toFixed(2)}`;
  part2.innerHTML = `DEPOSIT = $${Math.trunc(totalsum - setTill)}`;
  part3.innerHTML = `ENDING TILL = $${endingTill}`;
  part4.innerHTML = `${depositHundreds || 0} &nbsp;x $100`;
  part5.innerHTML = `${depositFifties || 0} &nbsp;x $50`;
  part6.innerHTML = `${depositTwenties || 0} &nbsp;x $20`;
  part7.innerHTML = `${depositTens || 0} x $10`;
  part8.innerHTML = `${depositFives || 0} x $5`;
  part9.innerHTML = `${depositOnes || 0} x $1`;

  const depositList = document.getElementById('depositList');
  depositList.style.display = 'block';


  const p1 = document.getElementById('ending1');
  const p2 = document.getElementById('ending2');
  const p3 = document.getElementById('ending3');
  const p4 = document.getElementById('ending4');
  const p5 = document.getElementById('ending5');
  const p6 = document.getElementById('ending6');
  const p7 = document.getElementById('ending7');
  const p8 = document.getElementById('ending8');
  const p9 = document.getElementById('ending9');
  const p10 = document.getElementById('ending10');
  const p11 = document.getElementById('ending11');

  p1.innerHTML = "ENDING TILL: ";
  p2.innerHTML = `Hundreds: $${hundreds - depositHundreds * 100}`; 
  p3.innerHTML = `Fifties: $${fifties - depositFifties * 50}`; 
  p4.innerHTML = `Twenties: $${twenties - depositTwenties * 20}`; 
  p5.innerHTML = `Tens: $${tens - depositTens * 10}`; 
  p6.innerHTML = `Fives: $${fives - depositFives * 5}`; 
  p7.innerHTML = `Ones: $${ones - depositOnes }`; 
  p8.innerHTML = `Quarters: $${quarters}`; 
  p9.innerHTML = `Dimes: $${dimes}`; 
  p10.innerHTML = `Nickels: $${nickels}`; 
  p11.innerHTML = `Pennies: $${pennies}`; 

}