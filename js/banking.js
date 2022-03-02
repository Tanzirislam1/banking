/* function doubleIt(num){
    const result = num * 2;
    return result;
}

const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7); */

function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;

    // covert string to number 
    const amountValue = parseFloat(inputAmountText);
    // clear input field 
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    // debugger
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;

    // convert to number
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposite-button').addEventListener('click', function(){
    /* const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;

    // covert string to number 
    const depositeAmount = parseFloat(depositeAmountText); */

    // get and update deposite total

    /*     
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;

    // convert to number
    const previousDepositeTotal = parseFloat(depositeTotalText);

    // depositeTotal er innerText er moddhe hbe hocche previous deposite + input e jeita new deposite korbo oita..

    depositeTotal.innerText = previousDepositeTotal + depositeAmount; 
    */
    const depositeAmount = getInputValue('deposite-input');
    if(depositeAmount > 0){
        updateTotalField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }

    // update balance 
    
/*     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    // balance text bole amra parseFloat kore number e convert korbo
    const previousBalanceTotal = parseFloat(balanceTotalText);

    // balance total er innertext mne balance er moddhe show korbe hocche jeita deposite hoy + hocche new input e jeita jog korbo sheita
    balanceTotal.innerText = previousBalanceTotal + depositeAmount; */

    

    /* // clear input field 
    depositeInput.value = ''; */
})

// handle withdraw 

document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    

    // get and update withdraw total 

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText)

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

    // update balance after withdraw 

    /* const balanceTotal = document.getElementById('balance-total');

    // balance total er man er innertext kore number e convert korte hbe
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (balanceTotalText);
    // balance total er innerText er moddhe previous balance jeita input e add korbo arki sheita - withdraw er amount...
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

    if(withdrawAmount > currentBalance){
        console.log('you can not withdraw more than what you have in your account')
    }

    /* // clear withdraw input field 
    withdrawInput.value = '' */

})