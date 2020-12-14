$(function() {

    /*======================
               Mobile Nav
    =======================*/
/*
    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });*/

            /*Accordion Footer*/
           
           
           $("[data-collapse]").on("click", function(event) {
                event.preventDefault();
    
                var $this = $(this),
                blockId = $this.data('collapse');
            
            $this.toggleClass("active");
            });


            /* Slider */

            $('.slider').slick({
                infinite: true,
                slidesToShow:1,
                slidesToScroll: 1,
                fade: true,
                arrows: true,
                dots: false,
                autoplay: false,
                //autoplaySpeed: 3000,
                pauseOnFocus: true
                
            });


});

/* Количество товара */

const startQty = document.querySelector('.qty__start')
const lessBtn = document.querySelector('.qty__less')
const moreBtn = document.querySelector('.qty__more')  

lessBtn.onclick = () => {
    startQty.value--;
}
/* lessBtn.addEventListener('click', function() {
    startQty.value--
})
*/

moreBtn.addEventListener('click', function() {
    startQty.value++
})


/* tabs */

const navLinks = document.querySelectorAll('.product__tabs__nav__link')
const tabBlock = document.querySelectorAll('.tabs__block ')
const tabsItems = document.querySelectorAll('.tabs__block')

navLinks.forEach(onTabClick) 
    
function onTabClick(item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let currentLink = item;
        let tabId = currentLink.getAttribute('data-tab');
        let currentTab =  document.querySelector(tabId);

        if( ! currentLink.classList.contains('link-active')) {
            navLinks.forEach(function(item) {
                item.classList.remove('link-active')
            })
            tabsItems.forEach(function(item) {
                item.classList.remove('block-active')
            })
    
            currentLink.classList.add('link-active')
            currentTab.classList.add('block-active')
        } 
    })   
}

/* **********Burger************** */
