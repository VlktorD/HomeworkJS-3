function atmWithdrawal() {
    let accountBalance = 100;
    let withdrawalAmount = parseFloat(prompt("Внесете ја сумата што сакате да ја подигнете:"));

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert("Ве молиме внесете валидна сума.");
        return;
    }

    if (withdrawalAmount > accountBalance) {
        alert("Нема доволно пари.");
    } else {
        accountBalance -= withdrawalAmount;
        alert("Успешно повлековте " + withdrawalAmount + ". Останати средства: " + accountBalance);
    }
}
