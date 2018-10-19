jQuery(document).ready(function() {
        //Transition effect for navbar 
		if ( !jQuery('#navbar').hasClass('navbar-solid') ) {
			jQuery(window).scroll(function() {
			  //Checks if window is scrolled more than 10vh, adds/removes solid class
			  if(jQuery(this).scrollTop() > (10 * window.innerHeight / 100) ) { //
				  jQuery('.navbar').addClass('navbar-solid');
			  } else {
				  jQuery('.navbar').removeClass('navbar-solid');
			  }
			});
		}
});
