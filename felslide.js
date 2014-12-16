/**
 * Place your JS-code here.
 */
(function($) {

	$.fn.sliderInit = function() {

		var allSlides = $(this).find(".slider"),
			zindex = 0,
			left = 36,
			currZindex = 0,
			hoverLeft = 0,
			allSlidesLeft = {};

		$.each(allSlides, function(key, value) {
			$(allSlides[key]).css('z-index', zindex);
			$(allSlides[key]).css('left', left + "%");
			zindex++;
			left += 4;
			allSlidesLeft[key] = left - 4;

			$(this).hover(
				function() {

					currZindex = $(this).css('z-index');
					$(this).css('z-index', zindex + 10);

					$.each(allSlides, function(hoverkey, hovervalue) {
						
						if(hoverkey > key) {
							$(allSlides[hoverkey]).css('left', parseFloat(allSlidesLeft[hoverkey] + 6.8) + "%");
						}
					});

				}, function() {
					$(this).css('z-index', currZindex);

					$.each(allSlides, function(offHoverKey, offHoverValue) {

						if(offHoverKey > key) {

							$(allSlides[offHoverKey]).css('left', parseFloat(allSlidesLeft[offHoverKey]) + "%");
						}
					});
				}
			);
		});
	};

}) (jQuery);

$('.slider-background').sliderInit();
