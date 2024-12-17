const btn = document.getElementById('btn');
const btncp = document.getElementById('btncp');
const pass = document.getElementById('pass');
const alertContainer = document.querySelector('.alertContainer');


btn.addEventListener('click',function(){
    const passwordLength = 14;
    const characters = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password='';
    for(let index=0; index<passwordLength; index++) {
        const randomNum= Math.floor(Math.random()* characters.length);
        password += characters[randomNum];
    } 
    pass.value=password;
    alertContainer.textContent=password + ' kopyalandı!';
})

btncp.addEventListener('click',function(){
    if(pass.value){
    pass.select();
    navigator.clipboard.writeText(pass.value);
    alertContainer.classList.remove('active');
    setTimeout(() => {
        alertContainer.classList.toggle('active');
    }, 2000);
    }
})