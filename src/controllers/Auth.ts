import  Auth  from "../repository/Auth";
import { renderPage } from "../routes/Routes.js";
export function  authenticate() {
    const auth = new Auth();
    const username = document.getElementById('login-username') as HTMLInputElement
    const password = document.getElementById('login-password') as HTMLInputElement
    if(auth.authentication(username.value as string,password.value as string)){
        renderPage('../src/templates/ViewDetails.html')
    } else {
        alert('Invalid Credentials')
    }
}

//mocking functions in jest.