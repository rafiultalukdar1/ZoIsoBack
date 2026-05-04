$(document).ready(function() {	

	// Scroll to Top
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 550);
		return false;
	});
	
	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});


	// menu toggle js 

	$('.menu-togger').click(function(){
		$('.mobile-nav').addClass('menu-activate');
		$('body').addClass('mobile-manu-active');
	});
	$('.menu-close-btn').click(function(){
		$('.mobile-nav').removeClass('menu-activate');
		$('body').removeClass('mobile-manu-active');
	});


	$(document).ready(function () {

    $('.dropdown-toggle-btn').on('click', function (e) {
        e.preventDefault();

        let parentLi = $(this).closest('li');
        let dropdown = parentLi.find('.dropdown-menu-wp-mb');

        // Close others
        $('.dropdown-menu-wp-mb').not(dropdown).slideUp();
        $('.mobile-navbar-wp li').not(parentLi).removeClass('active');

        // Toggle current
        dropdown.slideToggle();
        parentLi.toggleClass('active');
    });

});


	// stat slider 

	var swiper = new Swiper(".stats-slider", {
	spaceBetween: 20,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
		slidesPerView: 1,
		},
		576: {
		slidesPerView: 2,
		},
		992: {
		slidesPerView: 3,
		}
	}
	});
	

	// faq function 

	$('.faq-header').click(function(){

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next('.faq-content').stop(true, true).slideUp(300);
        } 
        else {
            $('.faq-header').removeClass('active');
            $('.faq-content').stop(true, true).slideUp(300);

            $(this).addClass('active');
            $(this).next('.faq-content').stop(true, true).slideDown(300);
        }

    });
		
});
