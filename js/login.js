document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();

    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (isNaN(mobileNumber) && isNaN(pinNumber)) {
        alert('please enter valid phone number or pin');
        return;
    }

    
    // number ti 11 digits er cheye choto ba boro hote parbe na
    if (mobileNumber.length > 11 || pinNumber.length > 4) {
        alert('Please valid number or pin');
        event.preventDefault();
    }
    else if (mobileNumber.length < 11 || pinNumber.length < 4) {
        alert('Please valid number or pin');
        event.preventDefault();
    }
    else {
        window.location.href = 'welcome-payoo.html'
    }

});


