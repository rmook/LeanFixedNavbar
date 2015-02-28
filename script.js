/**** Nifty Fixed Navbar by Rick Mook ****/

/**** This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/. ****/

/**** Feel free to copy, use, and modify with attribution ****/ 

var menu = $("#menu");

$("#pull").click(function() {
	menu.slideToggle("slow")
});

$(window).resize(function(){

	var w = $(window).width();

	if (w > 768 && menu.is(':hidden')) {
 		menu.removeAttr("style");
	}
});