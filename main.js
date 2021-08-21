let navbar = document.querySelector('.navbar');
let cart = document.querySelector('.cart-item-container');
let search = document.querySelector('.search-form');

let toggleBtn = document.querySelector('#menu-btn');
let cartBtn = document.querySelector('#cart-btn');
let searchBtn = document.querySelector('#search-btn');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');          
    cart.classList.remove('active');    
    search.classList.remove('active');    
})

cartBtn.addEventListener('click', () => {
    cart.classList.toggle('active');    
    navbar.classList.remove('active');        
    search.classList.remove('active');    
})

searchBtn.addEventListener('click', () => {
    search.classList.toggle('active');    
    navbar.classList.remove('active');    
    cart.classList.remove('active');        
})

window.onscroll = () => {
    navbar.classList.remove('active');    
    cart.classList.remove('active');    
    search.classList.remove('active');    
}