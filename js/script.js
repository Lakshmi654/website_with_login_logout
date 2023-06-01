let form = document.querySelector('form');
let arr = [];
form.addEventListener('submit',(e)=>{
 e.preventDefault();
let userName = document.getElementById('userName').value
let passwordconfirm = document.getElementById('passwordconfirm').value

arr.push({
 userName:userName,
 passwordconfirm:passwordconfirm,
})
console.log(arr);
})

function validateForm(args)
{
 if(args.value.length>0)
 {
     args.classList.remove('is-invalid')
     args.classList.add('is-valid')  
 }else{
     args.classList.remove('is-valid')
     args.classList.add('is-invalid')
 }
}
function validatePassword(args)
{
   let password = document.getElementById('password').value
    let passwordconfirm = args.value

    if(password==passwordconfirm)
    {
     args.classList.remove('is-invalid')
     args.classList.add('is-valid')  
    }else{
     args.classList.remove('is-valid')
     args.classList.add('is-invalid')
    }
}

function signup(){
 let userName = document.getElementById('userName').value
 let password = document.getElementById('password').value
 localStorage.setItem('userName',userName)
 localStorage.setItem('password',password)
 window.open('http://127.0.0.1:5500/website_with_login_logout/html/login.html')
}

function login(){
 let username = document.getElementById('userName').value
 let password = document.getElementById('password').value
 if(username==localStorage.getItem('userName') &&  password == localStorage.getItem('password')){
     window.open('http://127.0.0.1:5500/website_with_login_logout/html/website.html')
 }
 else{
     alert('Please check again User Name and password')
 }
}


function forget(){
    let conformpassword = document.getElementById('conformpassword').value
 

    localStorage.setItem('password',conformpassword )
    window.open('http://127.0.0.1:5500/WEBSITE/html/login.html')
}