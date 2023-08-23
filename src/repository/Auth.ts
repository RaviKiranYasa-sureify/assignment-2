 class Auth{
    username:string;
    password:string;
    constructor()
    {
        this.username = localStorage.getItem('username') as string
        this.password = localStorage.getItem('password') as string
    }
    authentication(username:string,password:string):Boolean{
        return this.username == username && this.password == password;
    }

}
// const sam = new Auth();
export default Auth;