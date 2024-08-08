// Home Carousel
$('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    autoplay:true,
    autoplayTineout:7000,
    animateOut: 'fadeOut',
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  
// Navbar
window.addEventListener('scroll', function() {
const navbar = document.getElementById('navbar');
navbar.classList.toggle('fixed', window.scrollY > 0);
});

// Nav Buttons
const menuBtn = document.querySelector('.menu-btn');
const searchBtn = document.querySelector('.searchbtn');
const cartBtn = document.querySelector('.cartbtn');
const darkBtn = document.querySelector('.darkbtn');
const signing = document.getElementById('signing')

menuBtn.addEventListener('click', function() {
  const navItems = document.getElementById('nav-items');
  navItems.classList.toggle('active');
  if (navItems.classList.contains('active')) {
      menuBtn.classList.remove('bx-menu');
      menuBtn.classList.add('bx-x');
  } else {
      menuBtn.classList.remove('bx-x');
      menuBtn.classList.add('bx-menu');
  }
  });

searchBtn.addEventListener('click', function() {
const searchForm = document.getElementById('search-from');
searchForm.classList.toggle('active');
if (searchForm.classList.contains('active')) {
    searchBtn.classList.remove('bx-search-alt-2');
    searchBtn.classList.add('bx-x');
} else {
    searchBtn.classList.remove('bx-x');
    searchBtn.classList.add('bx-search-alt-2');
}
});

cartBtn.addEventListener('click', function() {
const cart = document.getElementById('cart');
cart.classList.toggle('active');
if (cart.classList.contains('active')) {
    cartBtn.classList.remove('bx-cart');
    cartBtn.classList.add('bx-x');
} else {
    cartBtn.classList.remove('bx-x');
    cartBtn.classList.add('bx-cart');
}
});
darkBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkBtn.classList.remove('bx-moon');
      darkBtn.classList.add('bx-sun');

      signing.src = '/images/sign/sign-dark.png'
    } else {
      darkBtn.classList.remove('bx-sun');
      darkBtn.classList.add('bx-moon');

      signing.src = '/images/sign/sign-light.png'
    }
  });

// Menu Selection
let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e){
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){
        
        const target = e.target.getAttribute('data-target'); 
        
        menuTabs.querySelector('.active').classList.remove('active')
        e.target.classList.add('active');

        let menuSelection = document.querySelector('.menu-section');
        menuSelection.querySelector('.menu-tab-content.show').classList.remove('show')
        
        menuSelection.querySelector(target).classList.add('show')

    }
    else{
        return
    }
})

//events carousel
$('.events-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      750: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });

$('.team-carousel').owlCarousel({
loop: true,
margin: 20,
dots: true,
nav: false,
responsive: {
    0: {
    items: 1
    },
    600: {
    items: 2
    },
    1000: {
    items: 3
    }
}
});

$('.review-carousel').owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  responsive: {
      0: {
      items: 1
      },
      600: {
      items: 2
      },
      1000: {
      items: 3
      }
  }
  });


$('.blog-carousel').owlCarousel({
  loop: true,
  margin: 5,
  responsive: {
      0: {
      items: 1
      },
      600: {
      items: 2
      },
      1000: {
      items: 3
      }
  }
  });
