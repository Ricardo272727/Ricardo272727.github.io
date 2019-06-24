$(document).ready(function(){

	
	/**
	Dropdown Item
	**/
	$(".dropdown-hover").hover(function(){
		$(".dropdown-hover").addClass("show");
		$(".dropdown-menu").addClass("show");
		$(".dropdown-hover a").attr("aria-expanded","true");
	},function(){
		$(".dropdown-hover").removeClass("show");
		$(".dropdown-menu").removeClass("show");
		$(".dropdown-hover a").attr("aria-expanded","false");
	});

	/**
	Nav active
	**/

	$(".nav-link").on("click",function(){
		let id_link = $(this).attr("href");
		let items = id_link.split("#");
		let class_item = items[1];
		removeClassFromChildren("navbar-nav","active");
		$(`.nav-item.${class_item}`).addClass("active");
	});

	function removeClassFromChildren(parent, class_remove){
		let children = $("."+ parent).children();
		for(let i = 0; i < children.length; i++){
			let classes = children[i].className;
			if(classes.indexOf(class_remove) !== -1){
				$(children[i]).removeClass(class_remove);
			}
		}
	}

	/**
	Copy email
	**/
	$(".copy").on("click",function(e){
		e.preventDefault();
		let content = $(this).attr('title');
		let aux = document.createElement("input");
		aux.setAttribute("value",content);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
		$("#modal-body").empty();
		$("#modal-body").append("<h5>Copiado al portapapeles!</h5>");
		$("#modal").modal('show');
	});




});