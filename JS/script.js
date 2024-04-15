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
