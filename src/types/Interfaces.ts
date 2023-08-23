import { UserStatus } from "./Enums.js";
export interface User {
    mail: string;
    password: string;
    status: UserStatus
}