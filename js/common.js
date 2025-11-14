$(document).ready(function () {

	{
		if ($(window).width() < 992) {
			$(".footer__title_haschild").click(function () {
				$(this).toggleClass("active");
				$(this).siblings(".footer__content").slideToggle(200);
			});
		}
	}

	//features
	$(".more-features").click(function () {
		var headerHeight = $('.header').outerHeight();

		$('html, body').animate({
			scrollTop: $(".page-card .tabs").offset().top - headerHeight
		}, 800);
		$(".tabs li:nth-child(2) a").click();
	});

		//sidebar catalog
	$(".btn-main_filter").click(function (e) {
		e.preventDefault();
		$(".sidebar-catalog").slideToggle(200);
	});

	$(".item-sidebar__head").click(function () {
		$(this).parent().siblings().removeClass("active");
		$(this).parent().siblings().find(".item-sidebar__content").slideUp(200);
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
	});

	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		autoplay: true,
		autoplaySpeed: 6000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"></div>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"></div>',
	});

	$('.slider-catalog').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"></div>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.slider-for').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"></div>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"></div>',
	});


	$('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.slider-for',
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"></div>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"></div>',
		responsive: [
			{ 
				breakpoint: 992,
				settings: {
					vertical: false,
					slidesToShow: 3,
					verticalSwiping: false,
				}
			}
		]
	});

	$('.slider-documents').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"></div>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"></div>',
		responsive: [
			{ 
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{ 
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	//quantity
	jQuery('.quantity').each(function () {
		var spinner = jQuery(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});


	//tabs
	$('.tabs li a').click(function (event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
	});

	$('.tabs-about li a').click(function (event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane-about").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$('.tab-pane-about').find(".slider-documents").slick('setPosition');
	});



	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});

	objectFitImages();

});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function () { "use strict"; function t(t, e) { return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E" } function e(t) { if (t.srcset && !p && window.picturefill) { var e = window.picturefill._; t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src } } function i(t) { for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));)r[e[1]] = e[2]; return r } function r(e, i, r) { var n = t(i || 1, r || 0); b.call(e, "src") !== n && h.call(e, "src", n) } function n(t, e) { t.naturalWidth ? e(t) : setTimeout(n, 100, t, e) } function c(t) { var c = i(t), o = t[l]; if (c["object-fit"] = c["object-fit"] || "fill", !o.img) { if ("fill" === c["object-fit"]) return; if (!o.skipTest && f && !c["object-position"]) return } if (!o.img) { o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = ""); try { s(t) } catch (t) { window.console && console.warn("https://bit.ly/ofi-old-browser") } } e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function () { o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto" }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) { r(t, e.naturalWidth, e.naturalHeight) }) } function s(t) { var e = { get: function (e) { return t[l].img[e ? e : "src"] }, set: function (e, i) { return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e } }; Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", { get: function () { return e.get("currentSrc") } }), Object.defineProperty(t, "srcset", { get: function () { return e.get("srcset") }, set: function (t) { return e.set(t, "srcset") } }) } function o() { function t(t, e) { return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t } d || (HTMLImageElement.prototype.getAttribute = function (e) { return b.call(t(this, e), e) }, HTMLImageElement.prototype.setAttribute = function (e, i) { return h.call(t(this, e), e, String(i)) }) } function a(t, e) { var i = !y && !t; if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1; "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]); for (var r = 0; r < t.length; r++)t[r][l] = t[r][l] || { skipTest: e.skipTest }, c(t[r]); i && (document.body.addEventListener("load", function (t) { "IMG" === t.target.tagName && a(t.target, { skipTest: e.skipTest }) }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, { skipTest: e.skipTest })) } var l = "fregante:object-fit-images", u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g, g = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image, f = "object-fit" in g.style, d = "object-position" in g.style, m = "background-size" in g.style, p = "string" == typeof g.currentSrc, b = g.getAttribute, h = g.setAttribute, y = !1; return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a }();

