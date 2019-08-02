$(window).on('load', function () {
    	var $preloader = $('#preloader'),
        $animation = $preloader.find('.animation');
    	$animation.fadeOut();
    	$preloader.delay(500).fadeOut('slow');
		});