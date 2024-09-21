
// money add korar jonno
document.getElementById('add-money-btn').addEventListener('click', function(event) {

    event.preventDefault();

    const addAmount = inputValueId('add-amount');
    const pinNum = inputValueId('pin-number-value');
    const accountNumber = inputValueId('account-number');

    if (pinNum === 1234 && accountNumber === 12345678912) {
        const totalAmount = textValueId('total-amount');
        const newBalance = totalAmount + addAmount;
        document.getElementById('total-amount').innerText = newBalance;


        // for transaction
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-[#0808081A] rounded-xl py-3 px-4 bg-white flex justify-between mb-3">
                <div class="flex gap-2 items-center">
                    <div>
                        <img src="images/wallet.png" alt="image">
                    </div>
                    <div>
                        <h3 class="text-base font-semibold">Add Money ${addAmount} tk</h3>
                        <time datetime="" class="text-xs font-normal text-[#080808B2]">Today 01:44 AM</time>
                    </div>
                </div>
                <button><img src="images/three-dots.png" alt="image"></button>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);

    }
    else (
        alert('please check account number or pin number')
    )

});


// money cash-out korar jonno
document.getElementById('withdraw-money-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const amountInput = inputValueId('amount-input');
    const pinNumValue = inputValueId('pin-number-value');
    const agentNumber = inputValueId('agent-number');

    if (pinNumValue === 1234 && agentNumber === 12345678912) {
        const totalAmount = textValueId('total-amount');
        const newBalance = totalAmount - amountInput;
        document.getElementById('total-amount').innerText = newBalance;


        // for transaction
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-[#0808081A] rounded-xl py-3 px-4 bg-white flex justify-between mb-3">
                <div class="flex gap-2 items-center">
                    <div>
                        <img src="images/wallet.png" alt="image">
                    </div>
                    <div>
                        <h3 class="text-base font-semibold">Cashout Money ${amountInput} tk</h3>
                        <time datetime="" class="text-xs font-normal text-[#080808B2]">Today 01:44 AM</time>
                    </div>
                </div>
                <button><img src="images/three-dots.png" alt="image"></button>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else (
        alert('please check agent number or pin number')
    )
});




// click korar pot hide/show hobe

// add-money-button
document.getElementById('added-money-button').addEventListener('click', function() {
    this.classList.toggle('active');
    clickAddSectionId('add-money');
    clickButtonToggleClass('added-money-button');
    
});

// cash-out-button
document.getElementById('cash-out-button').addEventListener('click', function() {
    clickAddSectionId('cash-out');
    clickButtonToggleClass('cash-out-button');
});


// cash-out-button
document.getElementById('transaction-button').addEventListener('click', function() {
    clickAddSectionId('transaction');
    clickButtonToggleClass('transaction-button');
});