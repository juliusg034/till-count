function depositAmount(deposit, denomination, amount){
  if(amount === 0){return [deposit, 0]}
  else if (deposit === 0) {return  0}
  else if (amount > 0){
    let maxAmount = Math.floor(deposit/denomination);
    if(maxAmount > amount){
      deposit = deposit - (amount * denomination);
      return  amount;
    } else if (maxAmount < amount){
      deposit = deposit - (maxAmount * denomination);
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
  let deposit = {amount: totalsum};
  let amountFives = fives / 5
  let amountTens = tens / 10
  let amountTwenties = twenties / 20
  let amountFifties = fifties / 50
  let amountHundreds = hundreds / 100
  let amountOnes = ones / 1

  depositHundreds = depositAmount(deposit.amount, 100, amountHundreds);
  depositFifties = depositAmount(deposit.amount, 50, amountFifties);
  depositTwenties = depositAmount(deposit.amount, 20, amountTwenties);
  depositTens = depositAmount(deposit.amount, 10, amountTens);
  depositFives = depositAmount(deposit.amount, 5, amountFives);
  depositOnes = depositAmount(deposit.amount, 1, amountOnes);  


  const part1 = document.getElementById('deposit1');
  const part2 = document.getElementById('deposit2');
  const part3 = document.getElementById('deposit3');
  const part4 = document.getElementById('deposit4');
  const part5 = document.getElementById('deposit5');
  const part6 = document.getElementById('deposit6');
  const part7 = document.getElementById('deposit7');

  part1.innerHTML = `The Deposit comes out to ${totalsum - 300}`
  part2.innerHTML = `Deposit $${depositHundreds*100} hundreds.`;
  part3.innerHTML = `Deposit $${depositFifties*50} fifties.`;
  part4.innerHTML = `Deposit $${depositTwenties*20} twenties.`;
  part5.innerHTML = `Deposit $${depositTens*10} tens.`;
  part6.innerHTML = `Deposit $${depositFives*5} fives.`;
  part7.innerHTML = `Deposit $${depositOnes} ones.`;


}



