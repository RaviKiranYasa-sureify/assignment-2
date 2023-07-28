"use strict";
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["ACTIVE"] = 0] = "ACTIVE";
    UserStatus[UserStatus["INACTIVE"] = 1] = "INACTIVE";
})(UserStatus || (UserStatus = {}));
renderPage('Login.html');
function renderPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
        var contentDiv = document.getElementById('main');
        contentDiv.innerHTML = data;
    })
        .catch(error => {
        console.error('Unable to load page', error);
    });
}
function authenticate() {
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');
    console.log(localStorage.getItem('username'), localStorage.getItem('password'));
    console.log(username.value, password.value);
    if (localStorage.getItem('username') == username.value && localStorage.getItem('password') == password.value) {
        renderPage('ViewDetails.html');
    }
    else {
        alert('Invalid Credentials');
    }
}
function registerUser() {
    const username = document.getElementById('register-username');
    const password = document.getElementById('register-password');
    const rePassword = document.getElementById('register-re-password');
    console.log(password.value, rePassword.value);
    if (password.value != rePassword.value) {
        alert('password not matched');
    }
    else {
        localStorage.setItem('username', username.value.toString());
        localStorage.setItem('password', password.value.toString());
        localStorage.setItem('status', UserStatus.ACTIVE.toString());
        renderPage('Login.html');
    }
}
function getUserDetails() {
    const userlabel = document.getElementById("details");
    const x = localStorage.getItem('username');
    if (localStorage.getItem('status') == UserStatus.ACTIVE) {
        if (true) {
            userlabel.innerHTML = 'Good Morning' + x;
        }
        ;
    }
    else {
        alert('Not Authorised to view this page');
    }
}
