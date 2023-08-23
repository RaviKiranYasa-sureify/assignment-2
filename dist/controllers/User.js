import { User } from "../repository/User.js";
import { renderPage } from "../routes/Routes.js";
export function registerUser() {
    const user = new User();
    const username = document.getElementById('register-username');
    const password = document.getElementById('register-password');
    const rePassword = document.getElementById('register-re-password');
    if (password != rePassword) {
        alert('password not matched');
    }
    else {
        user.registerUsers(username, password, rePassword);
        renderPage('../src/templates/Login.html');
    }
}
export function getUserDetails() {
    const user = new User();
    const userlabel = document.getElementById("details");
    user.getUserDetail(userlabel);
}
