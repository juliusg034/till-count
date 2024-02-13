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

function getValues() {
  const hundreds = parseFloat(document.getElementById('hundreds').value);
  const fifties = parseFloat(document.getElementById('fifties').value);
  const twenties = parseFloat(document.getElementById('twenties').value);
  const tens = parseFloat(document.getElementById('tens').value);
  const fives = parseFloat(document.getElementById('fives').value);
  const ones = parseFloat(document.getElementById('ones').value);
  const coins = parseFloat(document.getElementById('coins').value);

  let totalsum = hundreds + fifties + twenties + tens + fives + ones + coins; 
  let deposit = {amount: totalsum - 300};
  let amountFives = fives / 5
  let amountTens = tens / 10
  let amountTwenties = twenties / 20
  let amountFifties = fifties / 50
  let amountHundreds = hundreds / 100
  let amountOnes = ones / 1

  console.log(deposit.amount)
  depositHundreds = depositAmount(deposit, 100, amountHundreds);
  console.log(deposit.amount)
  depositFifties = depositAmount(deposit, 50, amountFifties);
  console.log(deposit.amount)
  depositTwenties = depositAmount(deposit, 20, amountTwenties);
  console.log(deposit.amount)
  depositTens = depositAmount(deposit, 10, amountTens);
  console.log(deposit.amount)
  depositFives = depositAmount(deposit, 5, amountFives);
  console.log(deposit.amount)
  depositOnes = depositAmount(deposit, 1, amountOnes);  
  console.log(deposit.amount)


  const part1 = document.getElementById('deposit1');
  const part2 = document.getElementById('deposit2');
  const part3 = document.getElementById('deposit3');
  const part4 = document.getElementById('deposit4');
  const part5 = document.getElementById('deposit5');
  const part6 = document.getElementById('deposit6');
  const part7 = document.getElementById('deposit7');
  const part8 = document.getElementById('deposit8');

  part1.innerHTML = `TOTAL = ${totalsum}`;
  part2.innerHTML = `DEPOSIT = ${totalsum - 300}`;
  part3.innerHTML = `${depositHundreds || 0} &nbsp;x $100`;
  part4.innerHTML = `${depositFifties || 0} &nbsp;x $50`;
  part5.innerHTML = `${depositTwenties || 0} &nbsp;x $20`;
  part6.innerHTML = `${depositTens || 0} x $10`;
  part7.innerHTML = `${depositFives || 0} x $5`;
  part8.innerHTML = `${depositOnes || 0} x $1`;

  const depositList = document.getElementById('depositList');
  depositList.style.display = 'block';
}



