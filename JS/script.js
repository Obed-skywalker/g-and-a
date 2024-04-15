let menu= document.querySelector('#bars-icon');
let navbar= document.querySelector('.navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }

document.querySelectorAll('.box-container img').forEach(box =>{
    box.onclick = () =>{ 
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = box.getAttribute('src');
    }
});
document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}

document.querySelectorAll('.logo img').forEach(logo =>{
    logo.onclick = () =>{ 
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = logo.getAttribute('src');
    }
});
document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}
