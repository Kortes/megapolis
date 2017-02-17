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

	if ($(".video-preview__list").length > 0) {
		$(".video-preview__list").customCarousel({
			changeSelector: $(".video-preview__point"),
			slideTimeout: 5000,
			afterSlideCallback: function(e){
				$(".video-preview__point").removeClass("video-preview__point_active");
				$(".video-preview__point").eq(e.currentIndex).addClass("video-preview__point_active");
			}
		});
	}

	if ($(".news-main__advertising-list").length > 0) {
		$(".news-main__advertising-list").customCarousel({
			nextSelector: $(".news-main__advertising-arrow-next"),
	        prevSelector: $(".news-main__advertising-arrow-prev")
		});
	}

	if ($(".text__carousel").length > 0) {
		$(".text__carousel-list").customCarousel({
			nextSelector: $(".text__carousel-arrow_next"),
	        prevSelector: $(".text__carousel-arrow_prev")
		});
	}

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

	// Определим свои функции добавления/удаления класса, так как те, что в jQuery не работают для SVG
	jQuery.fn.myAddClass = function (classTitle) {
	  return this.each(function() {
	    var oldClass = jQuery(this).attr("class");
	    oldClass = oldClass ? oldClass : '';
	    jQuery(this).attr("class", (oldClass+" "+classTitle).trim());
	  });
	}
	jQuery.fn.myRemoveClass = function (classTitle) {
	  return this.each(function() {
	      var oldClass = jQuery(this).attr("class");
	      var startpos = oldClass.indexOf(classTitle);
	      var endpos = startpos + classTitle.length;
	      var newClass = oldClass.substring(0, startpos).trim() + " " + oldClass.substring(endpos).trim();
	      if (!newClass.trim())
	        jQuery(this).removeAttr("class");
	      else
	        jQuery(this).attr("class", newClass.trim());
	  });
	}

	if ($(".map").length > 0){
		$(".map__legend-item").hover(function(){
			var self = $(this);
			$(".map__shop_type_" + self.data("type")).myAddClass("map__shop_active");
		}, function(){
			var self = $(this);
			$(".map__shop_type_" + self.data("type")).myRemoveClass("map__shop_active");
		});
	}

	$(".map__preview-link").click(function(e){
		e.preventDefault();
		var self = $(this);
		var index = self.data("index");
		$(".map__preview").removeClass("map__preview_active");
		$(".map__floor").fadeOut(500);
		self.closest(".map__preview").addClass("map__preview_active");
		$(".map__floor_" + index).fadeIn(200)
	});

	$('.map__group').mouseover(function(e){
		var id = e.target.id;
		$('[data-id="'+ id +'"]').css('display', 'block');
	})
		.mouseleave(function(e){
			var id = e.target.id;
			$('[data-id="'+ id +'"]').css('display', 'none');
		})
		.mousemove(function(e){
			var id = e.target.id,
				img = $('[data-id="'+ id +'"]'),
				mouseX = e.pageX, //X coordinates of mouse
				mouseY = e.pageY; //Y coordinates of mouse

			img.css({
				top: mouseY - img.height() - 10,
				left: mouseX - (img.width() / 2)
			});
		});

});

