let backToTop = document.querySelector('#backtop');
const body = document.querySelector('body')

backToTop.addEventListener('click',()=>{
    location.href = "./Homepage.html"
    body.style.transition = '1s ease-in-out'
})