// practice myself 

document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const depositeInputValueText = depositeInput.value;
    // console.log(depositeInputValueText);
    // convert string to number 
    const depositeAmount = parseFloat(depositeInputValueText);

    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);

    depositeTotal.innerText = previousDepositeTotal + depositeAmount;

    // update balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositeAmount;

    // clear string
    depositeInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;

    // string to number 
    const totalWithdraw = parseFloat(withdrawText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = previousTotal + totalWithdraw;

    // get withdraw and balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const preViousBalance = parseFloat(balanceTotalText);


    balanceTotal.innerText = preViousBalance - totalWithdraw;

    
})