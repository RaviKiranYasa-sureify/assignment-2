import { UserStatus } from "../types/Enums";
export class User {
    constructor() {
        this.username = localStorage.getItem('username');
        this.status = localStorage.getItem('status');
    }
    registerUsers(username, password, rePassword) {
        localStorage.setItem('username', username ? username : "");
        localStorage.setItem('password', password);
        localStorage.setItem('status', UserStatus.ACTIVE.toString());
    }
    getUserDetail(userlabel) {
        if (this.status == UserStatus.ACTIVE) {
            userlabel.innerHTML = 'Good Morning' + (this.username);
        }
        else {
            alert('Not Authorised to view this page');
        }
    }
}
