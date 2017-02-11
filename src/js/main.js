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
		var id = event.target.id;
		$('[data-id="'+ id +'"]').css('display', 'block');
		 $('[data-id="'+ id +'"]').css('border', '1px solid #ccc');
// console.log(id);

		
	})
	 .mouseleave(function () {
	 	var id = event.target.id;
                       $('[data-id="'+ id +'"]').css('display', 'none');
                    })
                    .mousemove(function(e) {
                    	var id = event.target.id;
                        var mouseX = e.pageX, //X coordinates of mouse
                                mouseY = e.pageY; //Y coordinates of mouse

                         $('[data-id="'+ id +'"]').css({
                            top: mouseY-60,
                            left: mouseX - ($('[data-id="'+ id +'"]').width()/2)
                        });
                    });


					var bigMag = [
						{"code":"б304", "transX": "903px",  "transY": "198px",  "rotate": "31deg",  "skew": "-13deg"},
						{"code":"a301", "transX": "277px",  "transY": "319px",  "rotate": "-33deg",  "skew": "9deg"},
						{"code":"a400", "transX": "194px",  "transY": "280px",  "rotate": "-30deg",  "skew": "18deg", "w": "190px"},
						{"code":"b400", "transX": "892px",  "transY": "214px",  "rotate": "32deg",  "skew": "-15deg", "w":"150px"},
						{"code":"b410", "transX": "896px",  "transY": "105px",  "rotate": "31deg",  "skew": "-19deg"},
						{"code":"a100", "transX": "188px",  "transY": "244px",  "rotate": "-31deg",  "skew": "14deg", "w":"160px"},
						{"code":"b117", "transX": "1080px",  "transY": "208px",  "rotate": "30deg",  "skew": "-16deg", "w":"130px"},
						{"code":"b200", "transX": "910px",  "transY": "208px",  "rotate": "30deg",  "skew": "-16deg", "w":"160px"},
						{"code":"a500", "transX": "779px",  "transY": "260px",  "rotate": "33deg",  "skew": "-20deg", "w":"120px"},
						{"code":"b002", "transX": "260px",  "transY": "230px",  "rotate": "0deg",  "skew": "0deg", "w":"140px"},
						{"code":"c024", "transX": "55px",  "transY": "285px",  "rotate": "-31deg",  "skew": "13deg", "w":"130px"},
						{"code":"c003", "transX": "577px",  "transY": "220px",  "rotate": "0deg",  "skew": "0deg", "w":"100px"},
						{"code":"c001", "transX": "730px",  "transY": "231px",  "rotate": "-45deg",  "skew": "15deg", "w":"100px"}
					
					];

						
					 // jQuery.each(bigMag, function() {
					 // 	console.log($(this));
					 // 	console.log($('[data-code="'+  value['code']  +'"]'));
      // 					$('[data-code="'+ bigMag.code +'"]').css({"-webkit-transform":"translate("+bigMag.transX+","+bigMag.transY+")"});
      					
     	// 			});

					 $.each(bigMag, function(index,value) {
					    console.log($('[data-code="'+  value['code']  +'"]'));
					    $('[data-code="'+ value['code'] +'"]').css({"-webkit-transform":"translate("+value['transX']+","+value['transY']+") rotate("+value['rotate']+") skew("+value['skew']+")", "width": value['w']});

					  });

                  
                    	
                    

                

});

