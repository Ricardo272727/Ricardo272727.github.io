$(document).ready(function(){

	/**
	Flexslider active
	**/
	$(".flexslider").flexslider({
		animation:'slide',
		controlNav:false
	});

	/**
	Slider gallery
	**/
	$(".img-g").on('click',function(){
		let img_slider = $(this).attr('data-slider');
		cleanItems(".carousel-inner","active");
		$(img_slider).addClass("active");		
	});

	function cleanItems(parent,class_clean){
		let children_elements = $(parent).children();
		children_elements.removeClass('active');
	}

	/**
	Social scroll
	**/

	$(window).scroll(function() {
		if($("#menu").offset().top > 70){
			$("#social").removeClass("d-none");
			$("#social").addClass("d-block");
		}else{
			$("#social").removeClass("d-block");
			$("#social").addClass("d-none");
		}
	});



});