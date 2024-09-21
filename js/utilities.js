
function inputValueId(id) {
    const bankAccount = document.getElementById(id).value;
    const bankAccountNumber = Number(bankAccount);
    return bankAccountNumber;
}

function inputValueId2(id) {
    const bankAccount2 = document.getElementById2(id);
    const bankAccountNumber2 = Number(bankAccount2);
    return bankAccountNumber2;
}

function textValueId(id) {
    const amountId = document.getElementById(id).innerText;
    const amountIdNumber = Number(amountId);
    return amountIdNumber;
}

function clickAddSectionId(id) {
    // shob gulo hide thakbe
    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('cash-out').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');


    //jetate click kora hobe oita show hobe
    document.getElementById(id).classList.remove('hidden');
}

function clickButtonToggleClass(id) {
    document.getElementById('added-money-button').classList.remove('active');
    document.getElementById('cash-out-button').classList.remove('active');
    document.getElementById('transaction-button').classList.remove('active');

    document.getElementById(id).classList.add('active')
}