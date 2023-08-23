import { UserStatus } from "../types/Enums";
export class User {
    username: string | null;
    status: UserStatus | null;
    constructor() {
        this.username = localStorage.getItem('username') as string | null
        this.status = localStorage.getItem('status') as number | null;
    }
    registerUsers(username: string|null, password: string, rePassword: string) {
        localStorage.setItem('username', username?username:"");
        localStorage.setItem('password', password);
        localStorage.setItem('status', UserStatus.ACTIVE.toString())
       
    }

    getUserDetail() {
        if (this.status == UserStatus.ACTIVE) {
            return (this.username);
        } else {
            return null
        }
    }

}