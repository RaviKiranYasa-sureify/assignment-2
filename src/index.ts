enum UserStatus {
    ACTIVE =0,
    INACTIVE
}
renderPage('Login.html')

function renderPage(url: string) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var contentDiv = document.getElementById('main') as HTMLDivElement;
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Unable to load page', error);
        });
}
function authenticate() {
    const username = document.getElementById('login-username') as HTMLInputElement
    const password = document.getElementById('login-password') as HTMLInputElement
    console.log(localStorage.getItem('username'),localStorage.getItem('password'))
    console.log(username.value,password.value)
    if (localStorage.getItem('username') as string == username.value as string && localStorage.getItem('password') as string == password.value )
    {
            renderPage('ViewDetails.html')   
    } else{
        alert('Invalid Credentials')
    }
}

function registerUser()
{
    const username = document.getElementById('register-username') as HTMLInputElement
    const password = document.getElementById('register-password') as HTMLInputElement
    const rePassword = document.getElementById('register-re-password') as HTMLInputElement
    console.log(password.value,rePassword.value)
    if(password.value !=rePassword.value){
        alert('password not matched');
    } else {    
        localStorage.setItem('username', username.value.toString());
        localStorage.setItem('password', password.value.toString());
        localStorage.setItem('status',UserStatus.ACTIVE.toString())
        renderPage('Login.html')
    }

}

function getUserDetails() {
    const userlabel = document.getElementById("details") as HTMLLabelElement;
    const x= localStorage.getItem('username')
    if(localStorage.getItem('status') == UserStatus.ACTIVE as unknown as string)
    {
        if (true) {
            userlabel.innerHTML = 'Good Morning' + (x as string);
        };
    } else{
        alert('Not Authorised to view this page') 
    }


}

