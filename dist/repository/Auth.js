class Auth {
    constructor() {
        this.username = localStorage.getItem('username');
        this.password = localStorage.getItem('password');
    }
    authentication(username, password) {
        return this.username == username && this.password == password;
    }
}
// const sam = new Auth();
export default Auth;
