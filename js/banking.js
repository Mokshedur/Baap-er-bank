//handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
  //get the amount deposited
  const depositInput = document.getElementById('deposit-input');
  const newDepositAmountText = depositInput.value;
  //update deposit total 
  const newDepositAmount = parseFloat(newDepositAmountText);
  //console.log(depositAmount);
  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  //const previousDepositAmount = depositTotal.innerText;
  const newDepositTotal = previousDepositAmount + newDepositAmount;

  depositTotal.innerText = newDepositTotal;
  // dipositInput.value = depositAmount;
  //update account  balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;
  //clear the deposite input field
  depositInput.value = '';

});

// handle withdrow event handler
document.getElementById('Withdraw-button').addEventListener('click', function () {
  console.log('clicked');

  const withdrawInput = document.getElementById('widthdraw-input');
  const withdrawAmountText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);
  console.log(newWithdrawAmount);
  //set withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;

  //update balance
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceText = parseFloat(previousBalanceText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

  //   const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  //   withdrawTotal.innerText = newWithdrawTotal;
  //clear the data 
  withdrawInput.value = '';
});