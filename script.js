const container = document.querySelector(".container")

const loginbtn = document.querySelector('.login-btn')

const registerBtn = document.querySelector('.registre-btn')


loginbtn.addEventListener('click', ()=>{
   console.log("active");
   
   container.classList.remove('active')
})
registerBtn.addEventListener('click', ()=>{
   console.log('remove');
   
   container.classList.add('active')
})