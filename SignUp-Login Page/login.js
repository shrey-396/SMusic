let sign_data = JSON.parse(localStorage.getItem('signupdata'))
console.log(sign_data)
let email = document.getElementById('email')
let password = document.getElementById('password')
let login = document.getElementById('login')

login.addEventListener('click',(e)=>{
    e.preventDefault();
    let userdata= sign_data.find(ele => ele.email == email.value && ele.password == password.value)
        if(userdata){
            alert("Login Successful")
            location.href = "../Home Page/home.html"
        }
        else{
            alert("Didn't find User")
        }
    localStorage.setItem('username', userdata.username)
})