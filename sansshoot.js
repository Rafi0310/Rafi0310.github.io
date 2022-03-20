const toggle = document.getElementById('toggle');
const header = document.getElementById('header');
const navbar = document.getElementById('navbar');
let modeDark = document.querySelector('.modeDark');
let body = document.querySelector('body');

modeDark.onclick =function(){
    modeDark.classList.toggle('active');
    body.classList.toggle('dark')
}
document.onclick = function(e){
    if(e.target.id !=='header' && e.target.id !=='toggle' && e.target.id !=='navbar' && e.target.id !=='modeDark'){
        toggle.classList.remove('active');
        navbar.classList.remove('active'); 
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

