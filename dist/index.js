//import {renderPage} from './routes/Routes'
import { renderPage } from "./routes/Routes.js";
renderPage("../src/templates/Login.html");
// class Auth{
//     constructor()
//     {
//     }
//     authenticate() {
//         const username = document.getElementById('login-username') as HTMLInputElement
//         const password = document.getElementById('login-password') as HTMLInputElement
//         if (localStorage.getItem('username') as string == username.value as string && localStorage.getItem('password') as string == password.value) {
//             renderPage('Templates/ViewDetails.html')
//         } else {
//             alert('Invalid Credentials')
//         }
//     }
// }
// function registerUser() {
//     const username = document.getElementById('register-username') as HTMLInputElement
//     const password = document.getElementById('register-password') as HTMLInputElement
//     const rePassword = document.getElementById('register-re-password') as HTMLInputElement
//     if (password.value != rePassword.value) {
//         alert('password not matched');
//     } else {
//         localStorage.setItem('username', username.value.toString());
//         localStorage.setItem('password', password.value.toString());
//         localStorage.setItem('status', UserStatus.ACTIVE.toString())
//         renderPage('Login.html')
//     }
// }
