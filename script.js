var navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

var searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

var cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// back to top

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        document.querySelector('#back-to-top').style.display = 'block';
    } else {
        document.querySelector('#back-to-top').style.display = 'none';
    }
});

document.querySelector('#back-to-top').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior:'smooth'});
});


// AOS (Animate On Scroll)
AOS.init({
    duration: 1000, 
    easing: 'ease',
    once: true,
});


