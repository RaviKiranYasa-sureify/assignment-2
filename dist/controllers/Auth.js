import Auth from "../repository/Auth";
import { renderPage } from "../routes/Routes.js";
export function authenticate() {
    const auth = new Auth();
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');
    if (auth.authentication(username.value, password.value)) {
        renderPage('../src/templates/ViewDetails.html');
    }
    else {
        alert('Invalid Credentials');
    }
}
//mocking functions in jest.
