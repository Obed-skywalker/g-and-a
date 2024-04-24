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

document.querySelectorAll('.slide-container img').forEach(slidecontainer =>{
    slidecontainer.onclick = () =>{ 
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = slidecontainer.getAttribute('src');
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

/*  scroll reveal */
ScrollReveal({
    distance: '80px',
    duration: 1500,
    delay:100,
});

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.service-container',{origin: 'bottom'});

const initSlider = () => {
    const slideList = document.querySelector(".slider-wrapper .slide-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".slide-container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = slideList.scrollWidth - slideList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            slideList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = slideList.clientWidth * direction;
            slideList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = slideList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = slideList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = slideList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    slideList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

// send email from Form
const btn = document.getElementById('btn-email');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();
 
    btn.value = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_iz8zmzq';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Sent!');
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });
 });