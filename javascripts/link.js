$(function () {
	$("nav li.item a").mouseover(function() {
		$(this).css({
			"text-decoration": "underline",
			"color": "yellow"
		});
	});
	$("nav li.item a").mouseout(function() {
		$(this).css({
			"text-decoration": "none",
			"color": "#ffffff"
		});
	});

	$("nav #other").bind("click mouseover", function(){
		$("header .hideLink").toggle();
	});
	$("header .hideLink").mouseleave( function() {
		if( $(this).display != "none" ) {
			$("header .hideLink").toggle();
		}
	});

	$(".hideLink ul").mouseover( function() {
		$(this).css("background-color","#C0BBBB");
	});
	$(".hideLink ul").mouseout( function() {
		$(this).css("background-color","#fffff");
	});

	$("aside > h2").bind( "mouseover", function() {
		if( $(this).next("ul").css("display") == "none" ) {
			$(this).next("ul").toggle();
		}
	});
	$("aside>h2+ul").mouseleave( function() {
		if( $(this).css("display") != "none" ) {
			$(this).toggle();
		}
	});

	$("tr:odd").css("backgroundColor","#CBCBCB");
});
