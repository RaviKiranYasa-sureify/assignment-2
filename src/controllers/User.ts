
import { User } from "../repository/User.js";
import { renderPage } from "../routes/Routes.js";
import { UserStatus } from "../types/Enums.js";
export function registerUser()
{
    const user = new User();
    const username = document.getElementById('register-username') as string | null
    const password = document.getElementById('register-password') as string | null
    const rePassword = document.getElementById('register-re-password') as string | null
    if (password != rePassword) {
        alert('password not matched');
    } else {
        user.registerUsers(username as string,password as string,rePassword as string);
        renderPage('../src/templates/Login.html')
    }
}
export function getUserDetails()
{
    const user = new User();
    const userlabel = document.getElementById("details") as HTMLLabelElement;
    const username:string|null=user.getUserDetail();
    if (username) {
        userlabel.innerHTML = 'Good Morning' + (username);
    } else {
        alert('Not Authorised to view this page')
    }
}