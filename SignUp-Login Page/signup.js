let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let signup = document.getElementById('signup')
let signupdata =[]

signup.addEventListener('click',(e)=>{
    e.preventDefault()
    let jsondata = localStorage.getItem('signupdata')
    if(jsondata){
        signupdata = JSON.parse(jsondata)
    }
    signupdata.push({
        username: username.value,
        email: email.value,
        password: password.value
    })
    localStorage.setItem('signupdata', JSON.stringify(signupdata))
    location.href = "./login.html"
})