


function validate() {
    var userNameText = document.querySelector('#userNErr');
    let userNameInp = document.getElementById('user').value;
    let hr = document.getElementById('hrOne');

    if (userNameInp.length == 0) {
        userNameText.innerHTML = 'Username is required';
        userNameText.style.transform = 'scale(1)';
        userNameText.style.color = 'red';
        hr.style.backgroundColor = 'red';
        return false;
    }

    if (!userNameInp.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        userNameText.innerHTML = 'Input correct username';
        userNameText.style.transform = 'scale(1)';
        userNameText.style.color = 'red';
        hr.style.backgroundColor = 'red';
        return false;
    }

    userNameText.innerHTML = 'Valid input';
    userNameText.style.color = 'blue';
    hr.style.backgroundColor = 'blue';
    setTimeout(function (){hr.style.width = '100%'}, 2000);
    return true;
}

function validateOne() {
    var passWText = document.querySelector('#passWErr');
    let passWInp = document.getElementById("passW").value;
    let hr = document.getElementById('hrTwo');

    if (passWInp.length == 0) {
        passWText.innerHTML = 'Password is required';
        passWText.style.transform = 'scale(1)';
        passWText.style.color = 'red';
        hr.style.backgroundColor = 'red';
        return false;
    }
    if (passWInp.length <= 7) {
        passWText.innerHTML = 'Characters should be more than 7';
        passWText.style.transform = 'scale(1)';
        passWText.style.color = 'red';
        hr.style.backgroundColor = 'red';
        return false;
    }

    passWText.innerHTML = 'Valid input';
    passWText.style.color = 'blue';
    hr.style.backgroundColor = 'blue';
    setTimeout(function (){hr.style.width = '100%'; }, 2000);
    return true;
}


function validateForm() {
    if (!validate() || !validateOne() ? SubmitEvent : !SubmitEvent) {
        return false; 
    }
}