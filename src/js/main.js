$(document).ready(function() {

	$(".filter__link").click(function(e){
		e.preventDefault();
		var self = $(this);
		if(!self.hasClass("filter__link_active")){
			$(".filter__link").removeClass("filter__link_active");
			self.addClass("filter__link_active");

			if (self.hasClass("filter__link_list")){
				self.closest(".page__main").addClass("filter_list");
			} else {
				self.closest(".page__main").removeClass("filter_list");
			}
		}
	});

	$(".filter__item").click(function(e){
		e.preventDefault();
		var self = $(this);
		var index = self.index(".filter__item");
		if (!self.hasClass("filter__item_active")){
			$(".filter__item").removeClass("filter__item_active");
			$(".filter__slide").slideUp(100);
		}
		self.toggleClass("filter__item_active");
		self.closest(".filter").find(".filter__slide").eq(index).slideToggle(200);
	});

	$(".search__close").click(function(e){
		e.preventDefault();
		var self = $(this);
		self.closest(".filter__slide").slideUp(200);
		$(".filter__item_active").removeClass("filter__item_active");
	});

	$('.filter__group-link').click(function(e){
		e.preventDefault();
		var self = $(this);
		self.toggleClass("filter__group-link_active");
		self.closest(".filter__group").find(".filter__group-list").slideToggle(200);
	});

	$(".fancybox-link").fancybox({
		padding: 0
	});

	$(".gallery__preview-link").click(function(e){
		e.preventDefault();
		var self = $(this);
		var parent = self.closest(".gallery");
		var index = self.index(".gallery__preview-link");
		parent.find(".gallery__big-item").removeClass('gallery__big-item_active');
		parent.find(".gallery__big-item").eq(index).addClass('gallery__big-item_active');
	});


	if ($("#map").length > 0){
		ymaps.ready(init);
	    var myMap;

	    function init(){     
	        myMap = new ymaps.Map("map", {
	            center: [56.807141067901064,60.611964499999964],
	            zoom: 15,
	            controls: []
	        });

	        myPlacemark = new ymaps.Placemark([56.807141067901064,60.611964499999964], {
	            hintContent: 'ТРЦ Мегаполис'
	        });

	        myMap.geoObjects.add(myPlacemark);
	    }
	}
});